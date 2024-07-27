
namespace Demeter.Domain;

public class Products
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int BaseUnitPrice { get; set; }
    public DateTimeOffset DateCreated { get; set; }
    public DateTimeOffset DateModified { get; set; }
    public string ImageUrl { get; set; }
    public int Sale { get; set; }
    public int Rate { get; set; }
    
    public int CategoryId { get; set; }
    public Guid VendorId { get; set; }
    
    public ICollection<Voucher> Vouchers { get; set; }

    // public IList<Variants> Variants { get; set; }
}
public class ProductsInfo
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int BaseUnitPrice { get; set; }
    public DateTimeOffset DateCreated { get; set; }
    public DateTimeOffset DateModified { get; set; }
    public string ImageUrl { get; set; }
    public int Sale { get; set; }
    public int Rate { get; set; }
    
    public int CategoryId { get; set; }
    public Guid VendorId { get; set; }
    
    // public ICollection<Voucher> Vouchers { get; set; }
}