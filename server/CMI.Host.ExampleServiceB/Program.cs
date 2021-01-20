using Topshelf;

namespace CMI.Host.ExampleServiceB
{
    class Program
    {
        static void Main(string[] args)
        {
            HostFactory.Run(x =>
            {
                x.Service<Manager.ExampleServiceB.ExampleServiceB>(s =>
                {
                    s.ConstructUsing(name => new Manager.ExampleServiceB.ExampleServiceB());
                    s.WhenStarted(tc => tc.Start());
                    s.WhenStopped(tc => tc.Stop());
                });
                x.RunAsLocalSystem();

                x.SetDescription("The example service is used to mock a running service in the live environement.");
                x.SetDisplayName("CMI Viaduc Example Service B");
                x.SetServiceName("CMIExampleServiceB");
            });
        }
    }
}
