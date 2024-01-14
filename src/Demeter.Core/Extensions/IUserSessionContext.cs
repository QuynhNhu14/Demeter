using Demeter.Domain;

namespace Demeter.Core.Extensions;

public interface IUserSessionContext
{
    Task SetUserSessionAsync(AccountSession account, TimeSpan expirationTime);
    ValueTask<AccountSession?> GetUserSessionAsync(Guid accountId);
    Task RemoveUserSessionAsync(Guid accountId);
}