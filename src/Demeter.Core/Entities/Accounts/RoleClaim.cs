using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class RoleClaims : IdentityRoleClaim<Guid>
{
    public DateTimeOffset CreatedClaim { get; set; } = DateTimeOffset.Now;
    public virtual Roles Role { get; set; }
}