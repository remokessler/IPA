using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CMI.Manager.Parameter;
using Topshelf;

namespace CMI.Host.Parameter
{
    class Program
    {
        static void Main(string[] args)
        {
            HostFactory.Run(x =>
            {
                x.Service<ParameterService>(s =>
                {
                    s.ConstructUsing(name => new ParameterService());
                    s.WhenStarted(tc => tc.Start());
                    s.WhenStopped(tc => tc.Stop());
                });
                x.RunAsLocalSystem();

                x.SetDescription("The example service is used to mock a running service in the live environement.");
                x.SetDisplayName("CMI Viaduc Parameter Service");
                x.SetServiceName("CMIParameterService");
            });
        }
    }
}
