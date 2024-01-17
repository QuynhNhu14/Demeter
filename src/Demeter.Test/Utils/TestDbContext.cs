using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
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
    public DbSet<AccountClaim> AccountClaims { get; set; }
    public DbSet<AccountLogins> AccountLogins { get; set; }
    public DbSet<AccountTokens> AccountTokens { get; set; }
    public DbSet<AccountRole> AccountRoles { get; set; }
    public DbSet<RoleClaims> RoleClaims { get; set; }
    public DbSet<Roles> Roles { get; set; }

    public Task<int> SaveChangesAsync()
    {
        return base.SaveChangesAsync();
    }
    public TestDbContext(DbContextOptions<TestDbContext> options) : base(options)
    {
    }
}