using Demeter.Core.Entities;
using Demeter.Core.Models;

namespace Demeter.Infrastructure.Extensions;

public interface IJwtService
{
    ValueTask<Token> GenerateTokenFromUserName(string userName);
    ValueTask<Token> GenerateTokenAsync(User entity);
    ValueTask<Token> GenerateTokenAsyncUser(Domain.User user);
}