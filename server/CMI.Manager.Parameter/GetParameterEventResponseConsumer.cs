using System;
using System.Threading.Tasks;
using CMI.Contract.Parameter.GetParameter;
using MassTransit;

namespace CMI.Manager.Parameter
{
    public class GetParameterEventResponseConsumer : IConsumer<GetParameterEventResponse>
    {
        public async Task Consume(ConsumeContext<GetParameterEventResponse> context)
        {
            ParameterRequestResponseHelper.Parameters.AddRange(context.Message.Parameters);
            await Console.Out.WriteLineAsync("Parameter Recived");
        }
    }
}
