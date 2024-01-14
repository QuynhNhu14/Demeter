using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using Demeter.Core.Extensions;

namespace Demeter.Web.Extensions;


public class AuthContext : IAuthContext
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AuthContext(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task SignInAsync(Guid id)
    {
        // Set the username as the identity name
        var identity = new ClaimsIdentity("custom");
        identity.AddClaim(new Claim(ClaimTypes.Name, id.ToString()));
        var principal = new ClaimsPrincipal(identity);
        
        var authenticationProperties = new AuthenticationProperties
        {
            IsPersistent = true // Adjust this based on your requirements
        };
        
        if (_httpContextAccessor.HttpContext != null) await _httpContextAccessor.HttpContext.SignInAsync(principal, authenticationProperties);
    }

    public async ValueTask<Guid?> SignOutAsync()
    {
        var userId = _httpContextAccessor.HttpContext?.User.FindFirst(ClaimTypes.Name)?.Value;

        if (_httpContextAccessor.HttpContext != null) await _httpContextAccessor.HttpContext.SignOutAsync();

        return userId is null ? null : Guid.Parse(userId);
    }
}
