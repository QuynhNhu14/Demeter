using System.ComponentModel.DataAnnotations.Schema;
using Demeter.Domain;
using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class Account: IdentityUser<Guid>
{
    public AccountType Type { get; set; }
    
    public override string UserName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    
    [ForeignKey("User")]
    public Guid UserId { get; set; }
    public virtual Users? User { get; set; }
    public List<OrderItem> Carts { get; set; }
    public ICollection<AccountClaim> Claims { get; set; }    
    public ICollection<AccountRole> AccountRoles { get; set; }
    public ICollection<AccountLogins> AccountLogins { get; set; }
    public ICollection<AccountTokens> AccountTokens { get; set; }
    public ICollection<AccountRefreshTokens> AccountRefreshTokens { get; set; }
    public string AdditionalPropertiesJson { get; set; } = string.Empty;
}