using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
using Demeter.Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Demeter.Infrastructure.Identity;

public class AccountStore: UserStore<Account, Roles, CoreDbContext, Guid, AccountClaim, AccountRole, AccountLogins, AccountTokens, RoleClaims>
{
    public AccountStore(CoreDbContext context, IdentityErrorDescriber describer = null) : base(context, describer)
    {
    }
}