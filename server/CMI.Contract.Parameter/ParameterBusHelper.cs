using System;
using System.Linq;
using CMI.Contract.Parameter.GetParameter;
using CMI.Contract.Parameter.SaveParameter;
using MassTransit;

namespace CMI.Contract.Parameter
{
    public static class ParameterBusHelper
    {
        public static void SubscribeGetEvent<T>(IBus parameterBus) where T:ISetting
        {
            var paramInstance = Activator.CreateInstance(typeof(T)) as ISetting;
            paramInstance = ParameterHelper.GetSetting(paramInstance);
            parameterBus.Publish(new GetParameterEventResponse { Parameters = ParameterHelper.GetParameterListFromSetting(paramInstance) });
        }

        public static void SubscribeSaveEvent<T>(IBus parameterBus, Parameter paramToSave) where T:ISetting
        {
            var paramInstance = Activator.CreateInstance(typeof(T)) as ISetting;
            paramInstance = ParameterHelper.GetSetting(paramInstance);
            var paramAsParamList = ParameterHelper.GetParameterListFromSetting(paramInstance);
            if(paramAsParamList.Any(p => p.Name == paramToSave.Name))
            {
                paramAsParamList.First(p => p.Name == paramToSave.Name).Value = paramToSave.Value;
                parameterBus.Publish(new SaveParameterEventResponse { Success = ParameterHelper.SaveSetting(paramInstance, paramAsParamList) });
            }
        }
    }
}
