using Topshelf;

namespace CMI.Host.ExampleServiceA
{
    class Program
    {
        static void Main(string[] args)
        {
            HostFactory.Run(x =>
            {
                x.Service<Manager.ExampleServiceA.ExampleServiceA>(s =>
                {
                    s.ConstructUsing(name => new Manager.ExampleServiceA.ExampleServiceA());
                    s.WhenStarted(tc => tc.Start());
                    s.WhenStopped(tc => tc.Stop());
                });
                x.RunAsLocalSystem();

                x.SetDescription("The example service is used to mock a running service in the live environement.");
                x.SetDisplayName("CMI Viaduc Example Service A");
                x.SetServiceName("CMIExampleServiceA");
            });
        }
    }
}