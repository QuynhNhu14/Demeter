namespace Demeter.Core.Extensions;

public interface IAuthContext
{
    Task SignInAsync(Guid id);
    ValueTask<Guid?> SignOutAsync();
}