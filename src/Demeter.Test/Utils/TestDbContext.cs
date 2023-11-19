using Demeter.Core.Entities;
using Demeter.Core.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Test.Utils;

public class TestDbContext : DbContext, ICoreDbContext
{
    public virtual DbSet<AppSettings> AppSettings { get; set; }
    public DbSet<Users> Users { get; set; }
    public DbSet<Account> Accounts { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Prices> Prices { get; set; }
    public DbSet<Products> Products { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<Orders> Orders { get; set; }
    public DbSet<Voucher> Vouchers { get; set; }
    public Task<int> SaveChangesAsync()
    {
        return base.SaveChangesAsync();
    }
    public TestDbContext(DbContextOptions<TestDbContext> options) : base(options)
    {
    }
}