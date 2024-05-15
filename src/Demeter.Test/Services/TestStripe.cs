using NUnit.Framework;
using Stripe;

namespace Demeter.Test.Services;

public class TestStripe
{
    [Test]
    public void TestCheckout()
    {
        StripeConfiguration.ApiKey =
            "pk_test_51P8YCW2NvNTmA7DnZnMkT78kaC2vXdT0ztyCtczSyrB3Tb5FTraC5yR5W9800OPqcmiKdBCtOX30f794BMslNrcF00YZGQn2i2";
        var options = new Stripe.Checkout.SessionCreateOptions
        {
            SuccessUrl = "https://localhost:5173/checkout/success",
            LineItems = new List<Stripe.Checkout.SessionLineItemOptions>
            {
                new Stripe.Checkout.SessionLineItemOptions
                {
                    Price = "price_1MotwRLkdIwHu7ixYcPLm5uZ",
                    Quantity = 2,
                },
            },
            Mode = "payment",
        };
        var service = new Stripe.Checkout.SessionService();
        service.Create(options);
    }
}