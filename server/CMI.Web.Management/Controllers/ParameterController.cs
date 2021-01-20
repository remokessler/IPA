using System;
using System.Web.Http;
using CMI.Contract.Parameter;
using CMI.Contract.Parameter.GetParameter;
using CMI.Contract.Parameter.SaveParameter;
using CMI.Web.Management.Attributes;
using CMI.Web.Management.Helpers;
using MassTransit;

namespace CMI.Web.Management.Controllers
{
    [CamelCaseJson]
    public class ParameterController : ApiController
    {
        [Route(@"~/Controllers/GetAllParameters")]
        [HttpGet]
        public IHttpActionResult GetAllParameters()
        {
            var uri = new Uri(BusHelper.ParameterBus.Address, "GetParameterQueue");
            var requestClient = BusHelper.ParameterBus.CreateRequestClient<GetParameterRequest, GetParameterResponse>(uri, TimeSpan.FromSeconds(20));
            var result = requestClient.Request(new GetParameterRequest()).GetAwaiter().GetResult();
            
            return Ok(result.Parameters);
        }

        [Route(@"~/Controllers/SaveParameter")]
        [HttpPost]
        public IHttpActionResult SaveParameter(Parameter parameter)
        {
            var uri = new Uri(BusHelper.ParameterBus.Address, "SaveParameterQueue");
            var requestClient = BusHelper.ParameterBus.CreateRequestClient<SaveParameterRequest, SaveParameterResponse>(uri, TimeSpan.FromSeconds(20));
            var result = requestClient.Request(new SaveParameterRequest(parameter)).GetAwaiter().GetResult();
            return Ok(result.Success);
        }
    }
}
