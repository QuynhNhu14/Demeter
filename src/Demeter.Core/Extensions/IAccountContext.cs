using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Extensions;

public interface IAccountContext
{
    Task<Account> GetByIdAsync(string id);
    Task<Account> GetByUserName(string userName);
    Task<bool> CheckPassword(Account account, string password);
    Task<bool> IsExistUserName(string userName);
    Task<IdentityResult> CreateAccount(Account account);
    Task UpdateAsync(Account account);
    Task UpdateSecurityStampAsync(Account account);
    Task<bool> IncrementAccessFailedCountAsync(Account user);
    Task<bool> IsUserLockedOutAsync(Account user);
    Task ResetUserLockoutAsync(Account user);
}