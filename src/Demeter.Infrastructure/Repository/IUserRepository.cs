using Demeter.Core.Entities;

namespace Demeter.Infrastructure.Repository;

public interface IUserRepository
{
    IQueryable<User> Get(UserQueryOptions options);
    Task AddOrUpdateAsync(User user);
    void Delete(User user);
}

public class UserQueryOptions
{
    public bool IncludeTokens { get; set; }
    public bool IncludeRoles { get; set; }
}