using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using CMI.Contract.Parameter.GetParameter;
using MassTransit;

namespace CMI.Manager.Parameter
{
    public class GetParameterRequestConsumer : IConsumer<GetParameterRequest>
    {
        public Task Consume(ConsumeContext<GetParameterRequest> context)
        {
            ParameterRequestResponseHelper.Parameters = new List<Contract.Parameter.Parameter>();
            ParameterService.ParameterBus.Publish(new GetParameterEvent());
            Console.Out.WriteLineAsync("Get Event started");
            Thread.Sleep(400);
            if (ParameterRequestResponseHelper.Parameters.Count == 0)
            {
                Thread.Sleep(6000);
            }
            context.RespondAsync(new GetParameterResponse()
            {
                Parameters = ParameterRequestResponseHelper.Parameters.ToArray()
            });
            return Console.Out.WriteLineAsync("Get Event response sent");
        }
    }
}