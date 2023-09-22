using Demeter.Core.Entities;
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
    #endregion
    #region Methods
    public Task<int> SaveChangesAsync()
    {
        return base.SaveChangesAsync();
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AppSettings>();
    }
    #endregion
}