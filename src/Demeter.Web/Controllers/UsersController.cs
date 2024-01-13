using System.ComponentModel.DataAnnotations;
using Demeter.Core.Services.Users;
using Demeter.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers;
[ApiController]
[Route("api/users")]
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

    [HttpPost("account")]
    public async ValueTask<IActionResult> AddNewAccountAsync([FromBody] Domain.Account account)
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
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
    
    [HttpDelete("account")]
    public async ValueTask<IActionResult> DeleteAccountAsync([Required] string id)
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

    
}