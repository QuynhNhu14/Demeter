using Newtonsoft.Json;
using StackExchange.Redis;

namespace Demeter.Infrastructure.UserSession
{
    public class UserSessionContext
    {
        private readonly IDatabase _redisDatabase;
        private static readonly TimeSpan SessionTimeout = TimeSpan.FromMinutes(30);

        public UserSessionContext(string redisConnectionString)
        {
            // Initialize the Redis connection
            var redisConnection = ConnectionMultiplexer.Connect(redisConnectionString);
            _redisDatabase = redisConnection.GetDatabase();
        }

        public string StartSession(string userId)
        {
            // Generate a unique session ID (you might want to use a more secure method)
            string sessionId = Guid.NewGuid().ToString();

            // Create a new user session
            var session = new UserSession
            {
                UserId = userId,
                LastActivity = DateTime.Now
            };

            // Serialize the session object and store it in Redis
            string sessionKey = $"session:{sessionId}";
            string sessionData = JsonConvert.SerializeObject(session);
            this._redisDatabase.StringSet(sessionKey, sessionData, SessionTimeout);

            return sessionId;
        }

        public bool IsValidSession(string sessionId)
        {
            string sessionKey = $"session:{sessionId}";

            // Check if the session exists in Redis
            if (this._redisDatabase.KeyExists(sessionKey))
            {
                // Deserialize the session data
                string sessionData = this._redisDatabase.StringGet(sessionKey);
                var session = JsonConvert.DeserializeObject<UserSession>(sessionData);

                // Check session timeout
                return (DateTime.Now - session.LastActivity) < SessionTimeout;
            }

            return false;
        }

        public void UpdateSessionActivity(string sessionId)
        {
            string sessionKey = $"session:{sessionId}";

            // Update the last activity time in Redis
            if (this._redisDatabase.KeyExists(sessionKey))
            {
                // Deserialize the session data
                string sessionData = this._redisDatabase.StringGet(sessionKey);
                var session = JsonConvert.DeserializeObject<UserSession>(sessionData);

                // Update the last activity time
                session.LastActivity = DateTime.Now;

                // Serialize and update the session in Redis
                sessionData = JsonConvert.SerializeObject(session);
                this._redisDatabase.StringSet(sessionKey, sessionData, SessionTimeout);
            }
        }

        public void EndSession(string sessionId)
        {
            string sessionKey = $"session:{sessionId}";

            // Remove the session from Redis
            this._redisDatabase.KeyDelete(sessionKey);
        }

        public string GetUserId(string sessionId)
        {
            string sessionKey = $"session:{sessionId}";

            // Retrieve the session data from Redis
            if (this._redisDatabase.KeyExists(sessionKey))
            {
                string sessionData = this._redisDatabase.StringGet(sessionKey);
                var session = JsonConvert.DeserializeObject<UserSession>(sessionData);

                return session.UserId;
            }

            return null;
        }
    }
}
