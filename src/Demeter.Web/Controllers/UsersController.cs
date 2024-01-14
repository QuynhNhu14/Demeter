using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Demeter.Core.Extensions;
using Demeter.Core.Services.Users;
using Demeter.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers;
[ApiController]
[Route("api/users")]
public class UsersController: ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly IUsersService _usersService;
    private readonly IAccountService _accountService;

    public UsersController(ILogger<UsersController> logger, IUsersService usersService, IAccountService accountService, IUserSessionContext userSessionContext) {
        _logger = logger;
        _usersService = usersService;
        _accountService = accountService;
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
            var result = await _accountService.Login(account);
            return CreatedAtAction(nameof(Login), result);
        }
        catch (ValidationException ex)
        {
            return Unauthorized(ex.Message);
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
            await _accountService.Logout();
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