using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Demeter.Core.Entities;

public class Orders
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid OrderId { get; set; }
    public int TotalPrice { get; set; }
    
    [ForeignKey("Account")]
    public Guid AccountId { get; set; }
    public virtual Account? Account { get; set; }
    
    public virtual ICollection<OrderItem>? Items { get; set; }
}