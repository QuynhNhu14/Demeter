namespace Demeter.Domain;

public class Orders: BaseEntity<Guid>
{
    public Account Account { get; set; }
    public List<OrderItem> Items { get; set; }
    public int TotalPrice { get; set; }
}