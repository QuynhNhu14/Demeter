using Demeter.Core.Extensions;
using Demeter.Domain;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace Demeter.Infrastructure.Sessions;

// UserSessionContext.cs

public class UserSessionContext: IUserSessionContext
{
    private readonly IDistributedCache _cache;

    public UserSessionContext(IDistributedCache cache)
    {
        _cache = cache;
    }

    public async Task SetUserSessionAsync(AccountSession account, TimeSpan expirationTime)
    {
        var serializedData = JsonConvert.SerializeObject(account);
        var options = new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = expirationTime
        };

        await _cache.SetStringAsync(account.Account.Id.ToString(), serializedData, options);
    }

    public async ValueTask<AccountSession> GetUserSessionAsync(Guid accountId)
    {
        var serializedData = await _cache.GetStringAsync(accountId.ToString());

        return serializedData != null ? JsonConvert.DeserializeObject<AccountSession>(serializedData) : null;
    }

    public async Task RemoveUserSessionAsync(Guid accountId)
    {
        await _cache.RemoveAsync(accountId.ToString());
    }
}
