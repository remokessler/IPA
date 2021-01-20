namespace CMI.Contract.Parameter.SaveParameter
{
    public class SaveParameterEvent
    {
        public Parameter Parameter { get; set; }

        public SaveParameterEvent(Parameter parameter)
        {
            Parameter = parameter;
        }
    }
}
