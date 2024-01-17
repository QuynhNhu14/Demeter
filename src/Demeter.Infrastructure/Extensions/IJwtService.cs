using Demeter.Core.Models;

namespace Demeter.Infrastructure.Extensions;

public interface IJwtService
{
    ValueTask<Token> GenerateTokenFromUserName(string userName);
}