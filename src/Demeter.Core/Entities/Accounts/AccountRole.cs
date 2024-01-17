using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class AccountRole : IdentityUserRole<Guid>
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public Account Account { get; set; }
    public Roles Role { get; set; }
    public DateTime CreatedUserRoleDate { get; set; }
}