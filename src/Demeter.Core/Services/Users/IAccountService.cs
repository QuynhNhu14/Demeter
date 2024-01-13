namespace Demeter.Core.Services.Users;

public interface IAccountService
{
    ValueTask<ICollection<Domain.Account>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Account> users);
    ValueTask<Domain.Account> AddAsync(Domain.Account account);
    ValueTask Remove(string id);
}