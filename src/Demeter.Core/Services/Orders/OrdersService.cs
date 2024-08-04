using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Orders;

public class OrdersService : IOrdersService
{
    private readonly ICoreDbContext _context;
    private readonly IMapper _mapper;

    public OrdersService(ICoreDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }


    public async ValueTask<ICollection<Domain.OrdersInfo>> GetAllAsync()
    {
        var entities = await _context.Orders.ToListAsync();
        return _mapper.Map<IList<Domain.OrdersInfo>>(entities);
    }

    public async ValueTask UpdateAsync(ICollection<Domain.Orders> orders)
    {
        foreach (var order in orders)
        {
            var entity = await _context.Orders
                .FirstOrDefaultAsync(s => s.OrderId == order.Id);

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {order.Id} is not existed.");
            }

            _context.Orders.Entry(entity).CurrentValues.SetValues(_mapper.Map<Entities.Orders>(order));
            await _context.SaveChangesAsync();
        }
    }

    public async ValueTask AddAsync(Domain.OrdersInfo order)
    {

        if (string.IsNullOrWhiteSpace(order.OrderId.ToString()))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.OrdersInfo.OrderId)} should not be empty.");
        }
        System.Console.WriteLine("Hello World! AddAsync");
        try
        {
            var orderEntity = _mapper.Map<Entities.Orders>(order);
            _context.Orders.Add(orderEntity);

            foreach (var item in order.Items)
            {
                var orderItemEntity = new Entities.OrderItem
                {
                    Quantity = item.Quantity,
                    DateCreated = DateTimeOffset.UtcNow,
                    ProductId = item.ProductId,
                    OrderId = orderEntity.OrderId
                };

                _context.OrderItems.Add(orderItemEntity);
            }

            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            System.Console.WriteLine(e);
            throw;
        }
    }

    public async ValueTask Remove(string id)
    {
        var entities = await _context.Orders.ToListAsync();
        var result = entities.Find(t => t.OrderId.ToString() == id);
        if (result is null)
        {
            throw new ValidationException($"Invalid: {id} is not existed.");
        }

        _context.Orders.Remove(result);
        await _context.SaveChangesAsync();
    }
}