using Demeter.Domain.JsonConverter;
using Newtonsoft.Json;

namespace Demeter.Domain;

[JsonConverter(typeof(AccountJsonConverter))]
public class Account: BaseEntity<Guid>
{
    public virtual AccountType Type { get; set; } = AccountType.Undefined;

    public string UserName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public Users User { get; set; }
    public List<OrderItem> Carts { get; set; } = new();
}

public class LoginInfo
{
    public string Name { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty; 
}