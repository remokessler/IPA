using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;

namespace CMI.Contract.Parameter
{
    public class Parameter
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
        public string Default { get; set; }
        public string RegexValidation { get; set; }
        public bool Mandatory { get; set; } = false;
    }
}