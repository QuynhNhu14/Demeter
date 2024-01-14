using Demeter.Core.Extensions;

namespace Demeter.Web.Extensions;

public static class DependencyInjection
{
    public static IServiceCollection AddAuthContext(this IServiceCollection services)
    {
        services.AddHttpContextAccessor();
        services.AddAuthentication(options =>
        {
            options.DefaultScheme = "YourCustomScheme"; // Set your custom scheme name here
        });

        // Add AuthContext itself
        services.AddScoped<IAuthContext, AuthContext>();
        return services;
    }
}