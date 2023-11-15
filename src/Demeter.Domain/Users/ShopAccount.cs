namespace Demeter.Domain;

public class ShopAccount: Account
{
    public AccountType Type { get; } = AccountType.Shop;
}