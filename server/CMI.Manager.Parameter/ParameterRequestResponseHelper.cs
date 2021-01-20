using System.Collections.Generic;

namespace CMI.Manager.Parameter
{
    public static class ParameterRequestResponseHelper
    {
        public static List<Contract.Parameter.Parameter> Parameters { get; set; } = new List<Contract.Parameter.Parameter>();
        public static bool? SavedSuccessfully { get; set; }
    }
}
