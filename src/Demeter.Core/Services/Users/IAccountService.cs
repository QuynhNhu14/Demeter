using Demeter.Domain;

namespace Demeter.Core.Services.Users;

public interface IAccountService
{
    ValueTask<ICollection<Domain.Account>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Account> users);
    ValueTask<Domain.Account> GetByIdAsync(Guid id);
    ValueTask<Domain.Account> AddAsync(Domain.Account account);
    ValueTask Remove(Guid id);
}