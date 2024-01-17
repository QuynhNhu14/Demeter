using Demeter.Domain;

namespace Demeter.Core.Services.Users;

public interface IAccountService
{
    ValueTask UpdateAsync(Account account);
    ValueTask<Account> AddAsync(Account account);
    ValueTask SignInAsync(LoginInfo loginInfo);
    ValueTask SignOutAsync(string id);
}