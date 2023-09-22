using AutoMapper;

namespace Demeter.Core.Extensions;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Domain.AppSettings, Entities.AppSettings>();
        CreateMap<Entities.AppSettings, Domain.AppSettings>();

    }
}