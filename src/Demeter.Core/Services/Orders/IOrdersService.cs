namespace Demeter.Core.Services.Orders;

public interface IOrdersService
{
    ValueTask<ICollection<Domain.OrdersInfo>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Orders> orders);
    ValueTask AddAsync(Domain.OrdersInfo order);
    ValueTask Remove(string id);
}