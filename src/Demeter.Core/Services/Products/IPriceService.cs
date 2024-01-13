namespace Demeter.Core.Services.Products;

public interface IPriceService
{
    ValueTask<ICollection<Domain.Prices>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Prices> prices);
    ValueTask AddAsync(Domain.Prices price);
    ValueTask Remove(string id);
}