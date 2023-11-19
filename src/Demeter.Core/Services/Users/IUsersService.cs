namespace Demeter.Core.Services.Users;

public interface IUsersService
{
    ValueTask<ICollection<Domain.Users>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Users> users);
    ValueTask AddAsync(Domain.Users user);
    ValueTask Remove(Domain.Users user);
}