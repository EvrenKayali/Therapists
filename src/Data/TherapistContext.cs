using Microsoft.EntityFrameworkCore;
using Therapists.Data.Configuration;
using Therapists.Data.Entites;

namespace Therapists.Data;

public class TherapistContext : DbContext
{
    public DbSet<Title> Titles => Set<Title>();
    public DbSet<Expertise> Expertises => Set<Expertise>();
    public DbSet<Profile> Profiles => Set<Profile>();
    public TherapistContext(DbContextOptions<TherapistContext> options)
          : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        new ProfileConfiguration().Configure(modelBuilder.Entity<Profile>());
    }
}


