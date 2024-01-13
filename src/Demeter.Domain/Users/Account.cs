using System.Text.Json.Serialization;
using Demeter.Domain.JsonConverter;

namespace Demeter.Domain;

[JsonConverter(typeof(AccountJsonConverter))]
public class Account: BaseEntity<Guid>
{
    public virtual AccountType Type => AccountType.Undefined;

    public string Name { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;    

    public Users User { get; set; }
    public List<OrderItem> Carts { get; set; } = new();
}