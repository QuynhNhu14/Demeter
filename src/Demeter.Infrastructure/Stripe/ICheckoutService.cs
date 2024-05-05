using Demeter.Domain.Stripe;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Infrastructure.Stripe;

public interface ICheckoutService
{
    ValueTask<StripeCustomer> AddStripeCustomerAsync(AddStripeCustomer customer, CancellationToken ct);
    ValueTask<StripePayment> AddStripePaymentAsync(AddStripePayment payment, CancellationToken ct);
    string CreateCheckoutSession([FromBody] List<CreateCheckoutSessionStripeRequest> request);
}