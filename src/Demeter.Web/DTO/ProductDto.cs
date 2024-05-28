using Demeter.Domain;

namespace Demeter.Web.DTO;

public class ProductDto: Products
{
    public int? DiscountedPrice { get; set; }
}