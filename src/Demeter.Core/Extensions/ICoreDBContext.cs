using Demeter.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Extensions;

public interface ICoreDbContext
{
    DbSet<AppSettings> AppSettings { get; set; }
    Task<int> SaveChangesAsync();
}