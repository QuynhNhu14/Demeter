
using Demeter.Domain.Enum;

namespace Demeter.Domain;

public class Users : BaseEntity<Guid>
{
    public string FullName { get; set; } = string.Empty;
    public Gender Gender { get; set; }
    public DateTimeOffset DateOfBirth { get; set; }
    
    
    public string AccountName { get; set; } = string.Empty;
    public string AccountPassword { get; set; } = string.Empty;
    public string AvatarUrl { get; set; } = string.Empty;
    public UserType Type { get; set; }
}