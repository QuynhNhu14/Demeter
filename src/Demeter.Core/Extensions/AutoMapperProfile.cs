using AutoMapper;
using Newtonsoft.Json;

namespace Demeter.Core.Extensions;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Domain.AppSettings, Entities.AppSettings>();
        CreateMap<Entities.AppSettings, Domain.AppSettings>();
        CreateMap<Domain.Users, Entities.Users>()
            .ForMember(dest => dest.AddressJson, act => act.MapFrom(src => JsonConvert.SerializeObject(src.Address)));
        CreateMap<Entities.Users, Domain.Users>()
            .ForMember(dest => dest.Address, act => act.MapFrom(src => JsonConvert.DeserializeObject<Domain.Address>(src.AddressJson)));
        CreateMap<Domain.Account, Entities.Account>();
        CreateMap<Entities.Account, Domain.Account>();
    }
}