namespace Demeter.Domain;

public class ShopAccount: Account
{
    public new AccountType Type => AccountType.Shop;
}