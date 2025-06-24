using System;

namespace AuthServer.Models
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string Username { get; set; }
        public required string PasswordHash { get; set; }
        public required string Email { get; set; }
        public bool IsActive { get; set; } = true;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public Guid RoleId { get; set; }
        public  Role Role { get; set; }

    }
}
