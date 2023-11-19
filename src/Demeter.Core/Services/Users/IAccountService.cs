namespace Demeter.Core.Services.Users;

public interface IAccountService
{
    ValueTask<ICollection<Domain.Account>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Account> users);
    ValueTask AddAsync(Domain.Account user);
    ValueTask Remove(Domain.Account user);
}