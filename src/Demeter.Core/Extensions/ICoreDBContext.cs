using Demeter.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Extensions;

public interface ICoreDbContext
{
    DbSet<AppSettings> AppSettings { get; set; }
    DbSet<Category> Categories { get; set; }
    DbSet<Prices> Prices { get; set; }
    DbSet<Products> Products { get; set; }
    DbSet<OrderItem> OrderItems { get; set; }
    DbSet<Orders> Orders { get; set; }
    DbSet<Voucher> Vouchers { get; set; }
    DbSet<User> Users { get; set; }
    DbSet<Role> Roles { get; set; }
    DbSet<UserRole> UserRole { get; set; }
    
    Task<int> SaveChangesAsync();
    
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}