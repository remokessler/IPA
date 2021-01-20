using System;
using CMI.Contract.Parameter;
using CMI.Contract.Parameter.GetParameter;
using CMI.Contract.Parameter.SaveParameter;
using MassTransit;

namespace CMI.Manager.ExampleServiceB
{
    public class ExampleServiceB
    {
        private IBusControl ParameterBus { get; set; }
        public void Start()
        {
            ParameterBus = BusConfigurator.ConfigureBus((cfg, host) =>
            {
                cfg.ReceiveEndpoint(host, "GetAllParametersB", ep =>
                {
                    ep.Handler<GetParameterEvent>(context =>
                    {
                        ParameterBusHelper.SubscribeGetEvent<ExampleSettingB>(ParameterBus);
                        return Console.Out.WriteLineAsync("Get Parameters");
                    });
                });
                cfg.ReceiveEndpoint(host, "SaveParametersB", ep =>
                {
                    ep.Handler<SaveParameterEvent>(context =>
                    {
                        ParameterBusHelper.SubscribeSaveEvent<ExampleSettingB>(ParameterBus, context.Message.Parameter);
                        return Console.Out.WriteLineAsync("Saved Parameter");
                    });
                });
            });

            ParameterBus.Start();

        }

        public void Stop()
        {
        }
    }
}
