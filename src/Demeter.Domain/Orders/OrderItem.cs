namespace Demeter.Domain;

public class OrderItem : BaseEntity<int>
{
    public int Quantity { get; set; }
    public DateTimeOffset DateCreated { get; set; }
    public Products Product { get; set; }
}

public class OrderItemInfo : BaseEntity<int>
{
    public int Quantity { get; set; }
    public DateTimeOffset DateCreated { get; set; }
    public Guid ProductId { get; set; }
}