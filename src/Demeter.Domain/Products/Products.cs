namespace Demeter.Domain;

public class Products: BaseEntity<Guid>
{
    public string Name { get; set; }
    public string Description { get; set; }
    public int BaseUnitPrice { get; set; }
    public DateTimeOffset DateCreated { get; set; }
    public DateTimeOffset DateModified { get; set; }
    
    public Category Category { get; set; }
    public ShopAccount Vendor { get; set; }

    // public IList<Variants> Variants { get; set; }
}