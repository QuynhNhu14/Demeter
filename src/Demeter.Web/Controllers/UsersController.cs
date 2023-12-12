using System.ComponentModel.DataAnnotations;
using Demeter.Core.Services.Users;
using Demeter.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers;

public class UsersController: ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly IUsersService _usersService;
    private readonly IAccountService _accountService;

    public UsersController(ILogger<UsersController> logger, IUsersService usersService, IAccountService accountService) {
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

    [HttpGet("account")]
    public async ValueTask<IActionResult> GetAccounts()
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

    [HttpPost]
    public async ValueTask<IActionResult> AddNewUserAsync([FromBody] User user)
    {
        try
        {
            await _usersService.AddAsync(user);
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

    [HttpPost("account")]
    public async ValueTask<IActionResult> AddNewAccountAsync([FromBody] Domain.Account account)
    {
        try
        {
            await _accountService.AddAsync(account);
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

    [HttpDelete]
    public async ValueTask<IActionResult> DeleteUserAsync([Required] int id)
    {
        try
        {
            await _usersService.DeleteAsync(id);
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

    [HttpDelete("account")]
    public async ValueTask<IActionResult> DeleteAccountAsync([Required] int id)
    {
        try
        {
            await _accountService.DeleteAsync(id);
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

    
}