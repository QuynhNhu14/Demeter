using Demeter.Core.Extensions;
using Demeter.Infrastructure.Persistence;
using Demeter.Infrastructure.Sessions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Demeter.Infrastructure.Extensions;
public static class DependencyInjection
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        // Configure and register your core services here
        // services.AddTransient<IMyService, MyService>();
        
        
        
        // You can also configure services using the configuration parameter
        // var someConfigValue = configuration.GetValue<string>("SomeConfigKey");
        // services.AddSingleton(new MyConfigService(someConfigValue));
        return services;
    }
  public static IServiceCollection AddPersistence(this IServiceCollection services,
      IConfiguration configuration)
  {
    services.AddDbContext<CoreDbContext>(options =>
        options.UseSqlServer(configuration.GetConnectionString(Constant.PersistenceDb),
        b => b.MigrationsAssembly(typeof(CoreDbContext).Assembly.FullName)), ServiceLifetime.Transient);
    
    services.AddScoped<ICoreDbContext>(provider => provider.GetService<CoreDbContext>());
    return services;
  }

  public static IServiceCollection AddUserSessionContext(this IServiceCollection services, IConfiguration configuration)
  {
      services.AddStackExchangeRedisCache(options =>
      {
          options.Configuration = configuration.GetConnectionString(Constant.RedisCache);
      });
      services.AddScoped<IUserSessionContext, UserSessionContext>();
      // services.AddScoped<IUserSessionContext>(provider => provider.GetService<UserSessionContext>());
      return services;
  }
}
