using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Demeter.Infrastructure.Identity;

public class AccountManager: UserManager<Account>
{
    public AccountManager(IUserStore<Account> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<Account> passwordHasher, IEnumerable<IUserValidator<Account>> userValidators, IEnumerable<IPasswordValidator<Account>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<AccountManager> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
    {
    }
}