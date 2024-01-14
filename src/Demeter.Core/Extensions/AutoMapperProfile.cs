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
            .ForMember(dest => dest.Address,
                act => act.MapFrom(src => JsonConvert.DeserializeObject<Domain.Address>(src.AddressJson)));
        CreateMap<Domain.Account, Entities.Account>()
            .ForMember(dest => dest.UserId, act => act.MapFrom(src => src.User.Id));
        CreateMap<Entities.Account, Domain.Account?>()
            .AfterMap((src, dest) => JsonConvert.DeserializeObject<Domain.Account>(JsonConvert.SerializeObject(dest)));
        CreateMap<string, Domain.Account?>()
            .ConvertUsing(src => JsonConvert.DeserializeObject<Domain.Account>(src));
        
        CreateMap<Domain.Orders, Entities.Orders>();
        CreateMap<Entities.Orders, Domain.Orders>();
        CreateMap<Domain.OrderItem, Entities.OrderItem>();
        CreateMap<Entities.OrderItem, Domain.OrderItem>();
        CreateMap<Domain.Voucher, Entities.Voucher>();
        CreateMap<Entities.Voucher, Domain.Voucher>();
        
        CreateMap<Domain.Products, Entities.Products>();
        CreateMap<Entities.Products, Domain.Products>();
        CreateMap<Domain.Category, Entities.Category>();
        CreateMap<Entities.Category, Domain.Category>();
        CreateMap<Domain.Prices, Entities.Prices>();
        CreateMap<Entities.Prices, Domain.Prices>();
        
    }
}