using Demeter.Core.Entities;
using Demeter.Core.Entities.Accounts;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Extensions;

public interface ICoreDbContext
{
    DbSet<AppSettings> AppSettings { get; set; }
    DbSet<Users> Users { get; set; }
    DbSet<Account> Accounts { get; set; }
    DbSet<Category> Categories { get; set; }
    DbSet<Prices> Prices { get; set; }
    DbSet<Products> Products { get; set; }
    DbSet<OrderItem> OrderItems { get; set; }
    DbSet<Orders> Orders { get; set; }
    DbSet<Voucher> Vouchers { get; set; }
    DbSet<AccountClaim> AccountClaims { get; set; }
    DbSet<AccountLogins> AccountLogins { get; set; }
    DbSet<AccountTokens> AccountTokens { get; set; }
    DbSet<AccountRole> AccountRoles { get; set; }
    DbSet<RoleClaims> RoleClaims { get; set; }
    DbSet<Roles> Roles { get; set; }
    
    Task<int> SaveChangesAsync();
}