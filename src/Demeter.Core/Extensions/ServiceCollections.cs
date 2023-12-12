using Demeter.Core.Services.AppSettings;
using Demeter.Core.Services.Orders;
using Demeter.Core.Services.Products;
using Demeter.Core.Services.Users;
using Microsoft.Extensions.DependencyInjection;

namespace Demeter.Core.Extensions;

public static class ServiceCollections
{
    public static IServiceCollection AddCoreServices(this IServiceCollection services)
    {
        // Configure and register your core services here
        // services.AddTransient<IMyService, MyService>();
        services.AddTransient<IAppSettingsService, AppSettingsService>();
        
        services.AddTransient<IOrderItemService, OrderItemService>();
        services.AddTransient<IOrdersService, OrdersService>();
        services.AddTransient<IVoucherService, VoucherService>();

        services.AddTransient<ICategoryService, CategoryService>();
        services.AddTransient<IPriceService, PricesService>();
        services.AddTransient<IProductsService, ProductsService>();

        services.AddTransient<IAccountService, AccountService>();
        services.AddTransient<IUsersService, UsersService>();
        
        // You can also configure services using the configuration parameter
        // var someConfigValue = configuration.GetValue<string>("SomeConfigKey");
        // services.AddSingleton(new MyConfigService(someConfigValue));
        services.AddAutoMapper(typeof(AutoMapperProfile));
        return services;
    }
}