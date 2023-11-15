namespace Demeter.Domain;

public class Users : BaseEntity<Guid>
{
    public string FullName { get; set; } = string.Empty;
    public Gender Gender { get; set; }
    public DateTimeOffset DateOfBirth { get; set; }
    public string AvatarUrl { get; set; } = string.Empty;
    public Address Address { get; set; }
}