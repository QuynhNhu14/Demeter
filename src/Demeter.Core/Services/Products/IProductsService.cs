namespace Demeter.Core.Services.Products;

public interface IProductsService
{
    ValueTask<ICollection<Domain.Products>> GetAllAsync();
    ValueTask<Domain.Products?> GetById(string id); 
    ValueTask UpdateAsync(ICollection<Domain.Products> products);
    ValueTask AddAsync(Domain.Products product);
    ValueTask Remove(string id);
}