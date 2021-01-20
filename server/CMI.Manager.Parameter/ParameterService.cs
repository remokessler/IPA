using CMI.Contract.Parameter;
using MassTransit;

namespace CMI.Manager.Parameter
{
    public class ParameterService
    {
        public static IBusControl ParameterBus { get; set; }
        public void Start()
        {
            ParameterBus = BusConfigurator.ConfigureBus((cfg, host) =>
            {
                cfg.ReceiveEndpoint("GetParameterQueue", ec =>
                {
                    ec.Consumer(() => new GetParameterRequestConsumer());
                });
                cfg.ReceiveEndpoint("GetResponseParameterEventQueue", ec =>
                {
                    ec.Consumer(() => new GetParameterEventResponseConsumer());
                });
                cfg.ReceiveEndpoint("SaveParameterQueue", ec =>
                {
                    ec.Consumer(() => new SaveParameterRequestConsumer());
                });
                cfg.ReceiveEndpoint("SaveResponseParameterEventQueue", ec =>
                {
                    ec.Consumer(() => new SaveParameterEventResponseConsumer());
                });
            });
            
            ParameterBus.Start();
        }

        public void Stop()
        {
            ParameterBus.Stop();
        }
    }
}
