using CMI.Contract.Parameter;
using CMI.Contract.Parameter.Attributes;

namespace CMI.Manager.ExampleServiceB
{
    public class ExampleSettingB : ISetting
    {
        [Mandatory]
        [Default("12.02.2017")]
        [Validation(@"((0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d\d\d\d)")]
        public string EndeDatum;

        [Description("Diese Email dient nur zu Demonstrationszwecken.")]
        [Validation(@"([a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.])")]
        public string EMailAdress;

        [Default("true")]
        public bool FehlerVerstecken;

        [Validation(@"[0-9]|[0-5][0-9]")]
        [Mandatory]
        public int Sekunden;
    }
}
