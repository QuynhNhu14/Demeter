using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Demeter.Core.Extensions;
using Demeter.Core.Services.Users;
using Demeter.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers;
[ApiController]
[Route("api/users")]
public class UsersController: ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly IUsersService _usersService;
    private readonly IAccountService _accountService;
    private readonly UserManager<Account> _userManager;
    private readonly SignInManager<Account> _signInManager;
    private readonly IUserSessionContext _userSessionContext;

    public UsersController(ILogger<UsersController> logger, IUsersService usersService, IAccountService accountService, IUserSessionContext userSessionContext, UserManager<Account> userManager, SignInManager<Account> signInManager) {
        _logger = logger;
        _usersService = usersService;
        _accountService = accountService;
        _userSessionContext = userSessionContext;
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpGet]
    public async ValueTask<IActionResult> GetAllUsers()
    {
        try
        {
            var users = await _usersService.GetAllAsync();
            return Ok(users);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost("update")]
    public async ValueTask<IActionResult> UpdateUser(ICollection<Users> users)
    {
        try
        {
            await _usersService.UpdateAsync(users);
            return Ok();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("account")]
    public async ValueTask<IActionResult> GetAllAccounts()
    {
        try
        {
            var accounts = await _accountService.GetAllAsync();
            return Ok(accounts);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost("signup")]
    public async ValueTask<IActionResult> Signup([FromBody] Account account)
    {
        try
        {
            var result = await _accountService.AddAsync(account);
            return Ok(result);
        }
        catch (ValidationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
    
    [HttpDelete("account")]
    public async ValueTask<IActionResult> DeleteAccountAsync([Required] Guid id)
    {
        try
        {
            await _accountService.Remove(id);
            return Ok();
        }
        catch (ValidationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost("login")]
    public async ValueTask<IActionResult> Login([Required] AccountRead account)
    {
        try
        {
            var loginInfo = await _userManager.FindByNameAsync(account.Name);

            if (loginInfo == null || !await _userManager.CheckPasswordAsync(loginInfo, account.Password))
                return Unauthorized(new { Message = "Invalid credentials" });
            var data = await _accountService.GetByIdAsync(loginInfo.Id);
            // Create user session data
            var accountSession = new AccountSession
            {
                Account = data,
                IsAuthenticated = true
            };

            // Set user session data in Redis cache
            await _userSessionContext.SetUserSessionAsync(accountSession, TimeSpan.FromDays(1));

            // Sign in the user
            await _signInManager.SignInAsync(loginInfo, isPersistent: false);

            return Ok(new { Message = "Login successful", AccountSession = accountSession });

        }
        catch (ValidationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [Authorize]
    [HttpPost("logout")]
    public async ValueTask<IActionResult> Logout()
    {
        try
        {
            // Clear user session data from the cache
            var userId = _userManager.GetUserId(User);
            if (userId == null)
            {
                return BadRequest(new { Message = "No user is currently authenticated." });
            }
            await _userSessionContext.RemoveUserSessionAsync(Guid.Parse(userId));

            // Sign out the user
            await _signInManager.SignOutAsync();

            return Ok(new { Message = "Logout successful" });
        }
        catch (ValidationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
    
    [Authorize]
    [HttpPost("current")]
    public async ValueTask<IActionResult> GetCurrent()
    {
        try
        {
            var accountId = HttpContext.User.FindFirst(ClaimTypes.Name)?.Value;
            if (accountId is null)
            {
                return Unauthorized("Invalid token");
            }
            var result = await _accountService.GetByIdAsync(Guid.Parse(accountId));
            return CreatedAtAction(nameof(GetCurrent), result);
        }
        catch (ValidationException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}