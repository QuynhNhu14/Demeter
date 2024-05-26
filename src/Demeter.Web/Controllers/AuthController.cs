using System.ComponentModel.DataAnnotations;
using Demeter.Domain;
using Demeter.Infrastructure.Extensions;
using Demeter.Infrastructure.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IJwtService _jwtService;
        private readonly ILogger<AuthController> _logger;
        private readonly AppUserManager _manager;

        public AuthController(IJwtService jwtService, ILogger<AuthController> logger, AppUserManager manager)
        {
            _jwtService = jwtService;
            _logger = logger;
            _manager = manager;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] User account)
        {
            try
            {
                // Ensure the User and User Ids are unique
                account.Id = Guid.NewGuid();

                var result = await _manager.CreateAsync(account);
                if (result.Succeeded)
                {
                    var token = await _jwtService.GenerateTokenFromUserName(account.UserName);
                    return Ok(new { token.AccessToken, token.ExpiresIn });
                }
                return BadRequest(result.Errors);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Signup failed");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([Required] LoginInfo info)
        {
            var account = await _manager.FindByNameAsync(info.UserName);
            if (account == null)
            {
                return Unauthorized("Invalid login attempt");
            }

            var result = await _manager.CheckPasswordSignInAsync(account, info.Password, lockoutOnFailure: true);
            if (result.Succeeded)
            {
                var token = await _jwtService.GenerateTokenFromUserName(account.UserName);
                return Ok(new { token.AccessToken, token.ExpiresIn });
            }

            return Unauthorized("Invalid login attempt");
        }

        [Authorize]
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            // Implement logout logic if needed (e.g., invalidating tokens)
            return Ok("Logged out successfully");
        }
    }
}
