using System;

namespace CMI.Contract.Parameter.Attributes
{
    [AttributeUsage(AttributeTargets.Field)]
    public class DefaultAttribute : Attribute
    {
        public string Default { get; set; }
        public DefaultAttribute(string value)
        {
            Default = value;
        }
    }
}
