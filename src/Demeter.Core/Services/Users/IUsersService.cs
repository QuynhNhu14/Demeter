namespace Demeter.Core.Services.Users;
using Domain;

public interface IUsersService
{
    ValueTask<ICollection<Users>> GetAllUsersAsync();
    ValueTask<ICollection<Account>> GetAllAccountsAsync();
    ValueTask<Users> GetById(Guid id);
    ValueTask<Users> GetById(BaseEntity<Guid> id);
    ValueTask UpdateAsync(ICollection<Users> users);
    ValueTask RemoveAsync(Guid id);
}