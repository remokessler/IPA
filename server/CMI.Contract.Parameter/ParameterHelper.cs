using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using CMI.Contract.Parameter.Attributes;

namespace CMI.Contract.Parameter
{
    public static class ParameterHelper
    {
        public static Parameter[] GetParameterListFromSetting(ISetting setting)
        {
            var paramList = new List<Parameter>();
            var namePrefix = setting.GetType().Namespace;
            foreach (var fieldInfo in setting.GetType().GetFields())
            {
                var param = CreateParameter(fieldInfo, setting, namePrefix);
                if (param.Name != null)
                {
                    paramList.Add(param);
                }
                else
                {
                    throw new NullReferenceException();
                }
            }
            return paramList.ToArray();
        }

        public static bool ValidateParameter(Parameter parameter)
        {
            if (string.IsNullOrEmpty(parameter.Value) && parameter.Mandatory)
            {
                return false;
            }
            if (parameter.RegexValidation == null || parameter.Value == null)
            {
                return true;
            }

            var regex = new Regex(parameter.RegexValidation);

            var match = regex.IsMatch(parameter.Value);
            return match;
        }

        public static bool ValidateParameter(Parameter[] parameters)
        {
            return parameters.All(ValidateParameter);
        }

        public static bool SaveSetting(ISetting setting, Parameter[] parameters)
        {
            var path = GetSettingPath(setting);
            var jsonString = string.Empty;

            if (parameters == null)
            {
                if (!ValidateParameter(GetParameterListFromSetting(setting))) return false;

                jsonString = GetJsonStringOfSetting(setting);
            }
            if (parameters != null)
            {
                if (!ValidateParameter(parameters)) return false;

                jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(parameters);
            }
            try
            {
                System.IO.File.WriteAllText(path, jsonString);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static ISetting GetSetting(ISetting setting)
        {
            var path = GetSettingPath(setting);
            if (!System.IO.File.Exists(path))
            {
                InitialSaveSetting(setting);   
            }
            var jsonString = System.IO.File.ReadAllText(path);
            var paramList = Newtonsoft.Json.JsonConvert.DeserializeObject<Parameter[]>(jsonString);
            var namePrefix = setting.GetType().Namespace;

            foreach (var fieldInfo in setting.GetType().GetFields())
            {
                var value = paramList.First(p => p.Name == namePrefix + "." + fieldInfo.Name)?.Value;
                if (value != null)
                {
                    fieldInfo.SetValue(setting, Convert.ChangeType(value, fieldInfo.FieldType));
                }
            }

            return setting;
        }

        private static void InitialSaveSetting(ISetting setting)
        {
            var path = GetSettingPath(setting);
            var jsonString = GetJsonStringOfSetting(setting);
            System.IO.File.WriteAllText(path, jsonString);
        }

        private static string GetJsonStringOfSetting(ISetting setting)
        {
            var paramList = GetParameterListFromSetting(setting);
            var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(paramList);

            if (jsonString == null)
            {
                throw new NullReferenceException();
            }
            return jsonString;
        }

        private static string GetSettingPath(ISetting s)
        {
            var fullPath = s.GetType().Assembly.CodeBase;
            var path = fullPath.Replace(fullPath.Split('/').Last(), "setting.json");
            var uri = new UriBuilder(path);
            return Uri.UnescapeDataString(uri.Path);
        }

        private static Parameter CreateParameter(FieldInfo fieldInfo, ISetting setting, string prefix)
        {
            var param = new Parameter
            {
                Name = prefix + "." + fieldInfo.Name,
                Value = fieldInfo.GetValue(setting)?.ToString(),
                Type = GetType(fieldInfo.FieldType)
            };

            if (param.Name == null || param.Type == null) return null;

            var attributes = fieldInfo.GetCustomAttributes(true);
            foreach (var attribute in attributes)
            {
                var mandatoryAttribute = attribute as MandatoryAttribute;
                var defaultAttribute = attribute as DefaultAttribute;
                var validationAttribute = attribute as ValidationAttribute;
                var descriptionAttribute = attribute as DescriptionAttribute;
                if (mandatoryAttribute != null)
                {
                    param.Mandatory = true;
                }
                if (defaultAttribute != null)
                {
                    param.Default = defaultAttribute?.Default;
                }
                if (validationAttribute != null)
                {
                    param.RegexValidation = validationAttribute?.Regex;
                }
                if (descriptionAttribute != null)
                {
                    param.Description = descriptionAttribute?.Description;
                }
            }
            return param;
        }

        private static string GetType(Type type)
        {
            if (type.Name == "Boolean")
            {
                return "checkbox";
            }
            if (type.Name == "Int32" || type.Name == "Double" || type.Name == "Float" || type.Name == "Int64" || type.Name == "Long")
            {
                return "number";
            }
            return "text";
        }
    }
}
