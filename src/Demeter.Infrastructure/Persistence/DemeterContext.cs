using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Demeter.Domain;
using Microsoft.Extensions.Configuration;
// using Demeter.Core.Extensions;
// using Demeter.Core.Entities;

namespace Demeter.Infrastructure.Persistence
{

    public class DemeterContext : DbContext
    {
        public DemeterContext(DbContextOptions<DemeterContext> options, IConfiguration configuration) : base(options) {}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            base.OnConfiguring(optionsBuilder); 
        }


        public DbSet<User> Users { get; set; }
      
    }
}
