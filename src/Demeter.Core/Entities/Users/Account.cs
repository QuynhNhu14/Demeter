using System.ComponentModel.DataAnnotations.Schema;
using Demeter.Domain;

namespace Demeter.Core.Entities;

public class Account
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    
    public AccountType Type { get; set; }
    
    public string Name { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    
    [ForeignKey("User")]
    public Guid UserId { get; set; }
    public virtual Users? User { get; set; }
    public List<OrderItem> Carts { get; set; }
    public string AdditionalPropertiesJson { get; set; } = string.Empty;
}