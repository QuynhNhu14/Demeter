using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Orders;

public class VoucherService : IVoucherService
{
    private readonly ICoreDbContext _context;
    private readonly IMapper _mapper;

    public VoucherService(ICoreDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async ValueTask<ICollection<Domain.Voucher>> GetAllAsync()
    {
        var entities = await _context.Vouchers.ToListAsync();
        return _mapper.Map<IList<Domain.Voucher>>(entities);
    }

    public async ValueTask UpdateAsync(ICollection<Domain.Voucher> vouchers)
    {
        foreach (var voucher in vouchers)
        {
            var entity = await _context.Vouchers
                .FirstOrDefaultAsync(s => s.Id == voucher.Id);

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {voucher.Id} is not existed.");
            }

            _context.Vouchers.Entry(entity).CurrentValues.SetValues(_mapper.Map<Entities.Voucher>(voucher));
            await _context.SaveChangesAsync();
        }
    }

    public async ValueTask AddAsync(Domain.Voucher voucher)
    {
        if (string.IsNullOrWhiteSpace(voucher.Id.ToString()))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.Voucher.Id)} should not be empty.");
        }

        _context.Vouchers.Add(_mapper.Map<Entities.Voucher>(voucher));
        await _context.SaveChangesAsync();
    }

    public async ValueTask Remove(Domain.Voucher voucher)
    {
        var entities = await _context.Vouchers.ToListAsync();
        var result = entities.Find(t => t.Id == voucher.Id);
        if (result is null)
        {
            throw new ValidationException($"Invalid: {voucher.Id} is not existed.");
        }

        _context.Vouchers.Remove(result);
        await _context.SaveChangesAsync();
    }
}