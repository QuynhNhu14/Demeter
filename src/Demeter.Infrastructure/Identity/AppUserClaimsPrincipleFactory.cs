using System.Security.Claims;
using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace Demeter.Infrastructure.Identity;

public class AppUserClaimsPrincipleFactory: UserClaimsPrincipalFactory<Account>
{
    public AppUserClaimsPrincipleFactory(UserManager<Account> userManager, IOptions<IdentityOptions> optionsAccessor) : base(userManager, optionsAccessor)
    {
    }
    
    protected override async Task<ClaimsIdentity> GenerateClaimsAsync(Account account)
    {
        var claimsIdentity = await base.GenerateClaimsAsync(account);
        claimsIdentity.AddClaim(new Claim(ClaimTypes.NameIdentifier,account.Id.ToString(),ClaimValueTypes.String));
        //claimsIdentity.AddClaim(new Claim(ClaimTypes.Email,user?.Email));
        claimsIdentity.AddClaim(new Claim(ClaimTypes.Name,account.UserName));
        // claimsIdentity.AddClaim(new Claim(ClaimTypes.MobilePhone,user.PhoneNumber));
        claimsIdentity.AddClaim(new Claim(ClaimTypes.UserData,account.UserId.ToString(),ClaimValueTypes.String));

        claimsIdentity.AddClaim(new Claim(ClaimTypes.Role,account.Type.ToString()));

        //claimsIdentity.AddClaim(new Claim(ClaimTypes.Role,RoleManager.GetRoleNameAsync(user.Roles)));
            

        return claimsIdentity;
    }
}