using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class AccountClaim: IdentityUserClaim<Guid>
{
    public virtual Account Account { get; set; }
}