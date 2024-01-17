using Microsoft.AspNetCore.Identity;

namespace Demeter.Core.Entities.Accounts;

public class Roles : IdentityRole<Guid>
{
    public string DisplayName { get; set; } = string.Empty;
    public DateTimeOffset CreatedDate { get; set; } = DateTimeOffset.Now;
    public ICollection<RoleClaims> Claims { get; set; }
    public ICollection<AccountRole> Users { get; set; }
}