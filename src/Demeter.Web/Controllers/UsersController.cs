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

    public UsersController(ILogger<UsersController> logger, IUsersService usersService) {
        _logger = logger;
        _usersService = usersService;
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
    public async ValueTask<IActionResult> UpdateUser(ICollection<User> users)
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
}