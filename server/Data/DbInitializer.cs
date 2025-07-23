// Data/DbInitializer.cs
using AuthServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AuthServer.Data
{
    public static class DbInitializer
    {
        public static void Seed(AppDbContext db, IPasswordHasher<User> hasher)
        {
            db.Database.EnsureCreated();

            if (!db.Roles.Any())
            {
                var roles = new[]
                {
                    new Role {
                    Id          = Guid.Parse("aafed9ad-ce46-430e-b0fd-3d9f5bd2b379"),
                    Name        = "Admin",
                    Description = "Full access to all system features.",
                    RoleType    = RoleType.Admin,
                    CreatedAt   = DateTime.UtcNow
                    },
                    new Role {
                    Id          = Guid.Parse("69c2ffca-5607-4c58-953a-8261cd6af171"),
                    Name        = "User",
                    Description = "Basic user with limited permissions.",
                    RoleType    = RoleType.User,
                    CreatedAt   = DateTime.UtcNow
                    }
                };
                db.Roles.AddRange(roles);
            }

            if (!db.Users.Any())
            {
                var seeds = new[]
                {
                    new { Username = "admin", Password = "Admin@123",  FirstName = "Admin", LastName = "Administrator",
                        Email = "admin@example.com", RoleId = Guid.Parse("aafed9ad-ce46-430e-b0fd-3d9f5bd2b379") },
                    new { Username = "jdoe",  Password = "User@123",  FirstName = "John", LastName = "Doe",
                        Email = "jdoe@example.com", RoleId = Guid.Parse("69c2ffca-5607-4c58-953a-8261cd6af171") },
                    new { Username = "aron",  Password = "User@123",  FirstName = "Aron", LastName = "Smith",
                        Email = "aron@example.com", RoleId = Guid.Parse("69c2ffca-5607-4c58-953a-8261cd6af171") },
                    new { Username = "bella",  Password = "User@123",  FirstName = "Bella", LastName = "Johnson",
                        Email = "bella@example.com", RoleId = Guid.Parse("69c2ffca-5607-4c58-953a-8261cd6af171") },
                    new { Username = "ccelia",  Password = "User@123",  FirstName = "Celia", LastName = "Brown",
                        Email = "ccelia@example.com", RoleId = Guid.Parse("69c2ffca-5607-4c58-953a-8261cd6af171") }
                };

                foreach (var s in seeds)
                {
                    var user = new User
                    {
                        Id = Guid.NewGuid(),
                        Username = s.Username,
                        Email = s.Email,
                        FirstName = s.FirstName,
                        LastName = s.LastName,  
                        PasswordHash = string.Empty,
                        CreatedAt = DateTime.UtcNow,
                        IsActive = true,
                        RoleId = s.RoleId
                    };

                    user.PasswordHash = hasher.HashPassword(user, s.Password);

                    db.Users.Add(user);
                }
            }

            db.SaveChanges();
        }
    }
}
