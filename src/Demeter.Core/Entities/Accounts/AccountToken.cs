using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class AccountTokens : IdentityUserToken<Guid>
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public Account Account { get; set; }
    public DateTimeOffset GeneratedTime { get; set; } = DateTimeOffset.Now;
}