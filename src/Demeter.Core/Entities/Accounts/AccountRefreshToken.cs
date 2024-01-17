
using System.ComponentModel.DataAnnotations.Schema;

namespace Demeter.Core.Entities.Accounts;

public class AccountRefreshTokens
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [ForeignKey("Account")]
    public Guid AccountId { get; set; }
    public virtual Account Account { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.Now;
    public bool IsValid { get; set; }
}