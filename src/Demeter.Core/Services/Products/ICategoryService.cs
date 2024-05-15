namespace Demeter.Core.Services.Products;

public interface ICategoryService
{
    ValueTask<ICollection<Domain.Category>> GetAllAsync();
    ValueTask<ICollection<Domain.Category>> GetByName(string name);
    ValueTask UpdateAsync(ICollection<Domain.Category> categories);
    
    ValueTask AddAsync(Domain.Category category);
    ValueTask Remove(string id);
}