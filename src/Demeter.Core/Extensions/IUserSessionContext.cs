namespace Demeter.Core.Extensions;

public interface IUserSessionContext
{
    string StartSession(string userId);

    bool IsValidSession(string sessionId);

    void UpdateSessionActivity(string sessionId);

    void EndSession(string sessionId);

    string GetUserId(string sessionId);
}