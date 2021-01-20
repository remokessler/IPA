using System;

namespace CMI.Contract.Parameter.Attributes
{
    [AttributeUsage(AttributeTargets.Field)]
    public class DescriptionAttribute : Attribute
    {
        public string Description { get; set; }
        public DescriptionAttribute(string description)
        {
            Description = description;
        }
    }
}
