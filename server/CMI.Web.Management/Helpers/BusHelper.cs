using System;
using System.Threading.Tasks;
using CMI.Contract.Parameter;
using MassTransit;

namespace CMI.Web.Management.Helpers
{
    public static class BusHelper
    {
        public static IBusControl ParameterBus { get; }

        static BusHelper()
        {
            ParameterBus = BusConfigurator.ConfigureBus((cfg, host) =>
            {
                
            });
            ParameterBus.Start();
        }
    }

    
}