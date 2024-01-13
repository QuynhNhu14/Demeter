namespace Demeter.Core.Services.Orders;

public interface IOrderItemService
{
    ValueTask<ICollection<Domain.OrderItem>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.OrderItem> orderItems);
    ValueTask AddAsync(Domain.OrderItem orderItem);
    ValueTask Remove(string id);
}