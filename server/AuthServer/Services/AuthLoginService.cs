using System.Threading.Tasks;
using AuthServer.Data;
using AuthServer.Grpc;
using AuthServer.Models;
using Google.Protobuf.WellKnownTypes;     
using Grpc.Core;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AuthServer.Services
{
    public class LoginService : AuthServer.Grpc.LoginService.LoginServiceBase
    {
        private readonly AppDbContext _db;


        public LoginService(AppDbContext db)
        {
            _db = db;
        }

        public override async Task<ListUsersResponse> ListUsers(Empty request, ServerCallContext context)
        {
            var users = await _db.Users.Include(u => u.Role).ToListAsync();
            var response = new ListUsersResponse();
            foreach (var u in users)
            {
                response.Users.Add(new UserMessage
                {
                    Id = u.Id.ToString(),
                    Username = u.Username,
                    Email = u.Email,
                    IsActive = u.IsActive,
                    RoleName = u.Role.Name
                });
            }
            return response;
        }

        public override async Task<AuthResponse> Register(RegisterRequest request, ServerCallContext context)
        {
            var existingUser = await _db.Users
                .FirstOrDefaultAsync(u => u.Username == request.Username || u.Email == request.Email);

            if (existingUser != null)
            {
                return new AuthResponse
                {
                    Success = false,
                    Error = "Username or email already exists."
                };
            }
            var userRole = await _db.Roles
                .FirstOrDefaultAsync(u => u.RoleType == RoleType.User);
            if (userRole == null)
            {
                return new AuthResponse
                {
                    Success = false,
                    Error = "User role not found."
                };
            }

            var user = new Models.User
            {
                Username = request.Username,
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                IsActive = true,
                RoleId = userRole.Id, 
                PasswordHash = "hashed_password" 
            };
            var hasher = new PasswordHasher<Models.User>();
            user.PasswordHash = hasher.HashPassword(user, request.Password);

            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            return new AuthResponse
            {
                Success = true,
                Error = "User registered successfully."
            };
        }
        public override async Task<AuthResponse> Login(LoginRequest request, ServerCallContext context)
        {
            var user = await _db.Users
                .FirstOrDefaultAsync(u => u.Username == request.Username);
            bool notMatchPassword = true;

            if (user != null)
            {
                var hasher = new PasswordHasher<Models.User>();
                notMatchPassword = hasher.VerifyHashedPassword(user, user.PasswordHash, request.Password) != PasswordVerificationResult.Success;
            }

            if (user == null || notMatchPassword)
            {
                return new AuthResponse
                {
                    Success = false,
                    Error = "Invalid username or password."
                };
            }

            return new AuthResponse
            {
                Success = true,
                Error = "Login successful."
            };
        }
    }
}
