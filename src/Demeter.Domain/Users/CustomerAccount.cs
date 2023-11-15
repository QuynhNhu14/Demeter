namespace Demeter.Domain;

public class CustomerAccount: Account
{
    public AccountType Type { get; } = AccountType.Customer;
}