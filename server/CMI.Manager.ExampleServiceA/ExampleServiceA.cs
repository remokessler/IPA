using System;
using CMI.Contract.Parameter;
using CMI.Contract.Parameter.GetParameter;
using CMI.Contract.Parameter.SaveParameter;
using MassTransit;

namespace CMI.Manager.ExampleServiceA
{
    public class ExampleServiceA
    {
        private IBusControl ParameterBus { get; set; }
        public void Start()
        {
            ParameterBus = BusConfigurator.ConfigureBus((cfg, host) =>
            {
                cfg.ReceiveEndpoint(host, "GetAllParametersA", ep =>
                {
                    ep.Handler<GetParameterEvent>(context =>
                    {
                        ParameterBusHelper.SubscribeGetEvent<ExampleSettingA>(ParameterBus);
                        return Console.Out.WriteLineAsync("Get Parameters");
                    });
                });
                cfg.ReceiveEndpoint(host, "SaveParametersA", ep =>
                {
                    ep.Handler<SaveParameterEvent>(context =>
                    {
                        ParameterBusHelper.SubscribeSaveEvent<ExampleSettingA>(ParameterBus, context.Message.Parameter);
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