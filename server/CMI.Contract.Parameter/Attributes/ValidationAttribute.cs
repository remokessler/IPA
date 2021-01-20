using System;

namespace CMI.Contract.Parameter.Attributes
{
    [AttributeUsage(AttributeTargets.Field)]
    public class ValidationAttribute : Attribute
    {
        public string Regex { get; set; }
        public ValidationAttribute(string regex)
        {
            Regex = regex;
        }
    }
}
