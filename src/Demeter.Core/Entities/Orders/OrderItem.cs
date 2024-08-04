using System.ComponentModel.DataAnnotations.Schema;

namespace Demeter.Core.Entities;

public class OrderItem
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid OrderItemId { get; set; }
    public int Quantity { get; set; }
    public DateTimeOffset DateCreated { get; set; }

    [ForeignKey("Product")]
    public Guid ProductId { get; set; }
    public Products Product { get; set; }

    [ForeignKey("Order")]
    public Guid OrderId { get; set; }
    public Orders Order { get; set; }
}