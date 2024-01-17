using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class AccountLogins : IdentityUserLogin<Guid>
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public virtual Account Account { get; set; }
    public DateTimeOffset LoggedOn { get; set; } = DateTimeOffset.Now;
}