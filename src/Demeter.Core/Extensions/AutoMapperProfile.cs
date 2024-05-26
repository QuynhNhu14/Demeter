using AutoMapper;
using Newtonsoft.Json;

namespace Demeter.Core.Extensions;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Domain.AppSettings, Entities.AppSettings>();
        CreateMap<Entities.AppSettings, Domain.AppSettings>();

        CreateMap<Domain.User, Entities.User>()
            .ForMember(dest => dest.AddressJson, act => act.MapFrom(src => JsonConvert.SerializeObject(src.Address)));
        CreateMap<Entities.User, Domain.User>()
            .ForMember(dest => dest.Address,
                act => act.MapFrom(src => JsonConvert.DeserializeObject<Domain.Address>(src.AddressJson)));
        
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