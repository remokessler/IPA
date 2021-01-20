using CMI.Contract.Parameter.Attributes;

namespace CMI.Contract.Parameter.Tests
{
    public class TestSetting : ISetting
    {
        [Default("false")]
        [Description("Some Test")]
        public bool TestFlag;

        [Default("max.muster@supermail.ch")]
        [Mandatory]
        [Validation(@"([a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.])")]
        public string TestMailAdress;

        [Validation(@"((0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d\d\d\d)")]
        public string TestDate;

        [Description("Testwert")]
        public int TestNumber;

        public char TestUnknownType;

        [Mandatory]
        public string TestMandatory;
    }
}
