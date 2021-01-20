using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CMI.Contract.Parameter.Tests
{
    [TestClass]
    public class ParameterSerializerTests
    {
        [TestMethod]
        public void An_empty_setting_can_be_serialized()
        {
            var testSetting = new TestSetting();
            var parameterList = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.AreEqual(parameterList.Length, 6);
        }

        [TestMethod]
        public void Value_can_be_serialized_correctly()
        {
            var testSetting = new TestSetting
            {
                TestDate = "03.04.2018",
                TestFlag = true,
                TestMailAdress = "testmail@mail.ch",
                TestNumber = 20,
                TestMandatory = "Test"
            };
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestDate") && p.Value == "03.04.2018"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestFlag") && p.Value == "True"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMailAdress") && p.Value == "testmail@mail.ch"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestNumber") && p.Value == "20"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMandatory") && p.Value == "Test"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestUnknownType") && p.Value == new char().ToString()));
        }

        [TestMethod]
        public void Default_can_be_serialized_correctly()
        {
            var testSetting = new TestSetting();
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestFlag") && p.Default == "false"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMailAdress") && p.Default == "max.muster@supermail.ch"));
            Assert.AreEqual(pl.Count(p => p.Default != null), 2);
            Assert.AreEqual(pl.Count(p => p.Default == null), 4);
        }

        [TestMethod]
        public void Type_can_be_serialized_correctly()
        {
            var testSetting = new TestSetting();
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestFlag") && p.Type == "checkbox"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMailAdress") && p.Type == "text"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestDate") && p.Type == "text"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestUnknownType") && p.Type == "text"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestNumber") && p.Type == "number"));
        }

        [TestMethod]
        public void Description_can_be_serialized_correctly()
        {
            var testSetting = new TestSetting();
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestFlag") && p.Description == "Some Test"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestNumber") && p.Description == "Testwert"));
            Assert.AreEqual(pl.Count(p => p.Description != null), 2);
            Assert.AreEqual(pl.Count(p => p.Description == null), 4);
        }

        [TestMethod]
        public void Mandatory_can_be_serialized_correctly()
        {
            var testSetting = new TestSetting();
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMailAdress") && p.Mandatory));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMandatory") && p.Mandatory));
            Assert.AreEqual(pl.Count(p => p.Mandatory), 2);
            Assert.AreEqual(pl.Count(p => !p.Mandatory), 4);
        }

        [TestMethod]
        public void Validation_can_be_serialized_correctly()
        {
            var testSetting = new TestSetting();
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestMailAdress") &&
                                                 p.RegexValidation ==
                                                 @"([a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.])"));
            Assert.IsTrue(pl.Any(p => p.Name.EndsWith("TestDate") &&
                                                 p.RegexValidation ==
                                                 @"((0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d\d\d\d)"));
            Assert.AreEqual(pl.Count(p => p.RegexValidation != null), 2);
            Assert.AreEqual(pl.Count(p => p.RegexValidation == null), 4);
        }

        [TestMethod]
        public void Name_can_be_serialized_correclty()
        {
            var testSetting = new TestSetting();
            var pl = ParameterHelper.GetParameterListFromSetting(testSetting);
            Assert.IsTrue(pl.Any(p => p.Name == "CMI.Contract.Parameter.Tests.TestDate"));
            Assert.IsTrue(pl.Any(p => p.Name == "CMI.Contract.Parameter.Tests.TestMailAdress"));
            Assert.IsTrue(pl.Any(p => p.Name == "CMI.Contract.Parameter.Tests.TestNumber"));
            Assert.IsTrue(pl.Any(p => p.Name == "CMI.Contract.Parameter.Tests.TestMandatory"));
            Assert.IsTrue(pl.Any(p => p.Name == "CMI.Contract.Parameter.Tests.TestFlag"));
            Assert.IsTrue(pl.Any(p => p.Name == "CMI.Contract.Parameter.Tests.TestUnknownType"));
        }

        [TestMethod]
        public void Can_be_serialized_saved_and_can_then_be_deserialized_and_got()
        {
            var testSetting = new TestSetting
            {
                TestDate = "03.04.2018",
                TestFlag = true,
                TestMailAdress = "testmail@mail.ch",
                TestNumber = 20,
                TestMandatory = "Test"
            };

            try
            {
                Assert.IsTrue(ParameterHelper.SaveSetting(testSetting, null));
                var newTestSetting = (TestSetting) ParameterHelper.GetSetting(new TestSetting());
                Assert.AreEqual(newTestSetting.TestDate, testSetting.TestDate);
                Assert.AreEqual(newTestSetting.TestFlag, testSetting.TestFlag);
                Assert.AreEqual(newTestSetting.TestMailAdress, testSetting.TestMailAdress);
                Assert.AreEqual(newTestSetting.TestNumber, testSetting.TestNumber);
                Assert.AreEqual(newTestSetting.TestMandatory, testSetting.TestMandatory);
                Assert.AreEqual(newTestSetting.TestUnknownType, testSetting.TestUnknownType);
            }
            finally
            {
                var path = GetSettingPath(testSetting);
                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
            }
        }

        private static string GetSettingPath(ISetting s)
        {
            var fullPath = s.GetType().Assembly.CodeBase;
            var path = fullPath.Replace(fullPath.Split('/').Last(), "setting.json");
            var uri = new UriBuilder(path);
            return Uri.UnescapeDataString(uri.Path);
        }
    }
}
