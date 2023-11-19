namespace Demeter.Core.Services.Products;

public interface ICategoryService
{
    ValueTask<ICollection<Domain.Category>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Category> categories);
    ValueTask AddAsync(Domain.Category category);
    ValueTask Remove(Domain.Category category);
}