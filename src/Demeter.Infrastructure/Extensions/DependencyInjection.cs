using Demeter.Core.Extensions;
using Demeter.Infrastructure.Persistence;
using Demeter.Infrastructure.UserSession;
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
      // Retrieve Redis connection string from configuration
      string redisConnectionString = configuration.GetConnectionString("Redis");

      // Register UserSessionContext with a transient lifetime
      services.AddTransient<UserSessionContext>(provider => new UserSessionContext(redisConnectionString));

      return services;
  }
}
