using CMI.Contract.Parameter;
using CMI.Contract.Parameter.Attributes;

namespace CMI.Manager.ExampleServiceA
{
    public class ExampleSettingA : ISetting
    {
        [Mandatory]
        [Default("12.02.2017")]
        public string Date;

        [Description("Diese Email dient nur zu Demonstrationszwecken.")]
        [Validation(@"([a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.])")]
        public string EMailAdress;

        [Default("false")]
        public bool ServiceOn;

        [Validation(@"[0-9]|[0-9][0-9]")]
        [Mandatory]
        public int NumberOfIterations;
    }
}
