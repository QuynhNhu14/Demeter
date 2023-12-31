namespace Demeter.Domain;

public class Account: BaseEntity<Guid>
{
    private const AccountType Type = AccountType.Undefined;

    protected Account()
    {
        if (Type == AccountType.Undefined)
        {
            throw new TypeInitializationException(null ,null);
        }
    }
    
    public string Name { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public Users User { get; set; }
    public List<OrderItem> Carts { get; set; }
}