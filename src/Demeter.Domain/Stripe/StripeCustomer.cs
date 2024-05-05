namespace Demeter.Domain.Stripe;

public record StripeCustomer
(
    string Name,
    string Email,
    string CustomerId
);