using System.ComponentModel.DataAnnotations.Schema;
using Demeter.Domain;

namespace Demeter.Core.Entities;

public class Users
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    
    public string FullName { get; set; } = string.Empty;
    public Gender Gender { get; set; }
    public DateTimeOffset DateOfBirth { get; set; }
    
    public string AccountName { get; set; } = string.Empty;
    public string AccountPassword { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string AvatarUrl { get; set; } = string.Empty;
    public string AddressJson { get; set; } = string.Empty;
}