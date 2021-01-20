using System;
using System.Threading.Tasks;
using CMI.Contract.Parameter.SaveParameter;
using MassTransit;

namespace CMI.Manager.Parameter
{
    public class SaveParameterEventResponseConsumer : IConsumer<SaveParameterEventResponse>
    {
        public async Task Consume(ConsumeContext<SaveParameterEventResponse> context)
        {
            ParameterRequestResponseHelper.SavedSuccessfully = context.Message.Success;
            if (context.Message.Success)
            {
                await Console.Out.WriteLineAsync("Saved Successfully");
            }
            else
            {
                await Console.Out.WriteLineAsync("An Error has occured while saving!");
            }
            
        }
    }
}
