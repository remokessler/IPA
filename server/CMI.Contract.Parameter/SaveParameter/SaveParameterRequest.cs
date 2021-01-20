namespace CMI.Contract.Parameter.SaveParameter
{
    public class SaveParameterRequest
    {
        public Parameter Parameter { get; set; }

        public SaveParameterRequest(Parameter parameter)
        {
            Parameter = parameter;
        }
    }
}
