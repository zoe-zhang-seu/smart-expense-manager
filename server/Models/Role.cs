using System;

namespace AuthServer.Models
{
    public class Role
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string Name { get; set; }
        public required string Description { get; set; }
        public RoleType RoleType { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public static readonly Role[] DefaultRoles = new[]
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

    }

    public static class RoleExtensions
    {
        public static bool IsAdmin(this Role role) => role.RoleType == RoleType.Admin;
        public static bool IsUser(this Role role) => role.RoleType == RoleType.User;
    }

     public enum RoleType
    {
        Admin = 1,
        User  = 2,
    }
}