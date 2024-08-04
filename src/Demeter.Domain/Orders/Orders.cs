
namespace Demeter.Domain;

public class Orders : BaseEntity<Guid>
{
    public User User { get; set; }
    public List<OrderItem> Items { get; set; }
    public int TotalPrice { get; set; }
}

public class OrdersInfo
{
    public Guid OrderId { get; set; }
    public Guid UserId { get; set; }
    public List<OrderItemInfo> Items { get; set; }
    public int TotalPrice { get; set; }
    public int TotalQuantity { get; set; }
    public int Status { get; set; }
}