namespace Demeter.Domain;

public class Role: BaseEntity<Guid>
{
    public string Name { get; set; }

    public string NormalizedName { get; set; }

    public string ConcurrencyStamp { get; set; }
}