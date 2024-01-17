using System.Text;
using Demeter.Core.Extensions;
using Demeter.Domain;
using Demeter.Infrastructure.Persistence;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace Demeter.Web.Extensions;

public static class DependencyInjection
{
    public static IServiceCollection AddAuthContext(this IServiceCollection services, IConfiguration configuration)
    { 
        services.AddIdentity<Account, IdentityRole<Guid>>()
            .AddEntityFrameworkStores<CoreDbContext>()
            .AddDefaultTokenProviders();
        // Configure authentication
        services.AddAuthentication(options =>
            {
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = configuration["Jwt:Issuer"],
                    ValidAudience = configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"] ?? string.Empty))
                };
            });

        return services;
    }
}