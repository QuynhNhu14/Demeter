using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Orders;

public class OrderItemService: IOrderItemService
{
    private readonly ICoreDbContext _context;
    private readonly IMapper _mapper;

    public OrderItemService(ICoreDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async ValueTask<ICollection<Domain.OrderItem>> GetAllAsync()
    {
        var entities = await _context.OrderItems.ToListAsync();
        return _mapper.Map<IList<Domain.OrderItem>>(entities);
    }

    public async ValueTask UpdateAsync(ICollection<Domain.OrderItem> orderItems)
    {
        foreach (var orderItem in orderItems)
        {
            var entity = await _context.OrderItems
                .FirstOrDefaultAsync(s => s.OrderId.ToString() == orderItem.Id.ToString());

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {orderItem.Id} is not existed.");
            }

            _context.OrderItems.Entry(entity).CurrentValues.SetValues(_mapper.Map<Entities.Orders>(orderItem));
            await _context.SaveChangesAsync();
        }
    }

    public async ValueTask AddAsync(Domain.OrderItem orderItem)
    {
        if (string.IsNullOrWhiteSpace(orderItem.Id.ToString()))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.OrderItem.Id)} should not be empty.");
        }

        _context.OrderItems.Add(_mapper.Map<Entities.OrderItem>(orderItem));
        await _context.SaveChangesAsync();
    }

    public async ValueTask Remove(Domain.OrderItem orderItem)
    {
        var entities = await _context.OrderItems.ToListAsync();
        var result = entities.Find(t => t.OrderId.ToString() == orderItem.Id.ToString());
        if (result is null)
        {
            throw new ValidationException($"Invalid: {orderItem.Id} is not existed.");
        }

        _context.OrderItems.Remove(result);
        await _context.SaveChangesAsync();
    }
}