namespace Demeter.Core.Services.Orders;

public interface IOrdersService
{
    ValueTask<ICollection<Domain.Orders>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Orders> orders);
    ValueTask AddAsync(Domain.Orders order);
    ValueTask Remove(string id);
}