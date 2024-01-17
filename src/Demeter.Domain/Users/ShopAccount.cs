namespace Demeter.Domain;

public class ShopAccount: Account
{
    public override AccountType Type => AccountType.Shop;
}