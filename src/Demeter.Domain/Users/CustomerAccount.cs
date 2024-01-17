namespace Demeter.Domain;

public class CustomerAccount: Account
{
    public override AccountType Type => AccountType.Customer;
}