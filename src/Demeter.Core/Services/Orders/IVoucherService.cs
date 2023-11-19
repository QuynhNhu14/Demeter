namespace Demeter.Core.Services.Orders;

public interface IVoucherService
{
    ValueTask<ICollection<Domain.Voucher>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.Voucher> vouchers);
    ValueTask AddAsync(Domain.Voucher voucher);
    ValueTask Remove(Domain.Voucher voucher);
}