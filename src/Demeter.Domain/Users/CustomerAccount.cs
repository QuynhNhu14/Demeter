namespace Demeter.Domain;

public class CustomerAccount: Account
{
    public new AccountType Type => AccountType.Customer;
}