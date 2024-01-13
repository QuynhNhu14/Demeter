namespace Demeter.Core.Services.Users;
using Domain;

public interface IUsersService
{
    ValueTask<ICollection<Users>> GetAllAsync();
    ValueTask<Users> GetById(Guid id);
    ValueTask<Users> GetById(BaseEntity<Guid> id);
    ValueTask UpdateAsync(ICollection<Users> users);
    ValueTask<Users> AddAsync(Users user);
    ValueTask Remove(string id);
}