using fantacalcioApi.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace fantacalcioApi.Data
{
    public class FantacalcioContext : DbContext
    {

        public FantacalcioContext(DbContextOptions<FantacalcioContext> options)
            : base(options)
        {
        }

        public DbSet<Championship> Championships { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Player> Players { get; set; }


    }
}
