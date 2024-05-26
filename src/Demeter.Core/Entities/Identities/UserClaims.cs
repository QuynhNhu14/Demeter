using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities;

public class UserClaims : IdentityUserClaim<Guid>
{
    public virtual User Identity { get; set; }
}