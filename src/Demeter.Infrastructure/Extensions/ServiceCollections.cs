using System.Text;
using Demeter.Core.Extensions;
using Demeter.Infrastructure.Identity;
using Demeter.Infrastructure.Jwt;
using Demeter.Infrastructure.Persistence;
using Demeter.Infrastructure.Stripe;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Stripe;
using Account = Demeter.Core.Entities.Accounts.Account;

namespace Demeter.Infrastructure.Extensions;

public static class ServiceCollections
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
    
    public static IServiceCollection AddStripe(this IServiceCollection services, IConfiguration configuration)
    {
        // Configure and register your core services here
        StripeConfiguration.ApiKey = configuration.GetValue<string>(Constant.StripeSecretKey);
        
        //https://github.com/stripe/stripe-dotnet/issues/1882
        services.AddTransient<CustomerService>();
        services.AddTransient<SubscriptionService>();
        services.AddTransient<InvoiceService>();
        services.AddTransient<PriceService>();
        services.AddTransient<ChargeService>();
        services.AddTransient<TokenService>();
        services.AddScoped<ICheckoutService,CheckoutService>();
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

    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration configuration)
    {
        //Jwt configuration starts here
        var jwtSettings = configuration
            .GetSection(nameof(JwtSettings))
            .Get<JwtSettings>();

        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IUserClaimsPrincipalFactory<Account>, AppUserClaimsPrincipleFactory>();
        services.AddScoped<IUserStore<Account>, AccountStore>();
        services.AddScoped<IAccountContext, AccountContext>();

        services
            .AddIdentityCore<Account>(options =>
            {
                options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._+";
                options.User.RequireUniqueEmail = false;
                
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredUniqueChars = 0;
                options.Password.RequireUppercase = false;
            })
            .AddRoles<IdentityRole<Guid>>()
            .AddEntityFrameworkStores<CoreDbContext>()
            .AddUserStore<AccountStore>()
            .AddUserManager<AccountManager>();

        services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtSettings.Issuer,
                    ValidAudience = jwtSettings.Audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey))
                };
            });


        return services;
    }
}