namespace Demeter.Domain;

public class Category: BaseCategory
{
    public int BaseCategoryId { get; set; }
}
public class BaseCategory: BaseEntity<int>
{
    public string Name { get; set; }
    public string Description { get; set; }
}