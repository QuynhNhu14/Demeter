using System.ComponentModel.DataAnnotations.Schema;
using Demeter.Domain;
using Account = Demeter.Core.Entities.Accounts.Account;

namespace Demeter.Core.Entities;

public class Users
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public Gender Gender { get; set; }
    public DateTimeOffset DateOfBirth { get; set; }

    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string AvatarUrl { get; set; } = string.Empty;
    public string AddressJson { get; set; } = string.Empty;
}