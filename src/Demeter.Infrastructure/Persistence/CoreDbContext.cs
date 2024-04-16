using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
using Demeter.Core.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Infrastructure.Persistence;

public class CoreDbContext : DbContext, ICoreDbContext
{
    #region Ctor

    public CoreDbContext(DbContextOptions<CoreDbContext> options)
        : base(options)
    {
    }

    #endregion

    #region DbSet

    public DbSet<AppSettings> AppSettings { get; set; }
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

    #endregion

    #region Methods

    public Task<int> SaveChangesAsync()
    {
        return base.SaveChangesAsync();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrderItem>()
            .HasOne(c => c.Product)
            .WithOne()
            .OnDelete(DeleteBehavior.NoAction);
        modelBuilder.Entity<Category>()
            .HasOne(c => c.BaseCategory)
            .WithMany()
            .OnDelete(DeleteBehavior.NoAction);
        modelBuilder.Entity<AccountClaim>()
            .HasOne(u => u.Account)
            .WithMany(u => u.Claims)
            .HasForeignKey(u => u.UserId);
        modelBuilder.Entity<RoleClaims>()
            .HasOne(u => u.Role)
            .WithMany(u => u.Claims)
            .HasForeignKey(u => u.RoleId)
            .OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<AccountLogins>()
            .HasOne(u => u.Account)
            .WithMany(u => u.AccountLogins)
            .HasForeignKey(u => u.UserId);
        modelBuilder.Entity<AccountRole>()
            .HasOne(u => u.Account)
            .WithMany(u => u.AccountRoles)
            .HasForeignKey(u => u.UserId);
        modelBuilder.Entity<AccountRole>()
            .HasOne(u => u.Role)
            .WithMany(u => u.Users)
            .HasForeignKey(u => u.RoleId);
        modelBuilder.Entity<AccountTokens>()
            .HasOne(u => u.Account)
            .WithMany(u => u.AccountTokens)
            .HasForeignKey(u => u.UserId);
        // modelBuilder.Entity<Account>()
        //     .HasOne(u => u.User)
        //     .WithOne(u => u.Account);
    }

    #endregion
}