using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Demeter.Core.Services.Users;
using Demeter.Domain;
using Demeter.Infrastructure.Extensions;
using Demeter.Web.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController: ControllerBase
{
    private readonly IAccountService _accountService;
    private readonly IJwtService _jwtService;
    private readonly ILogger<AuthController> _logger;

    public AuthController(IAccountService accountService, IJwtService jwtService, ILogger<AuthController> logger)
    {
        _accountService = accountService;
        _jwtService = jwtService;
        _logger = logger;
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
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error while creating account");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost("login")]
    public async ValueTask<IActionResult> Login([Required] LoginInfo info)
    {
        try
        {
            await _accountService.SignInAsync(info);
            var token = await _jwtService.GenerateTokenFromUserName(info.Name);
            return Ok(token);
        }
        catch (ValidationException ex)
        {
            return Unauthorized(ex.Message);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error while logging in");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [Authorize]
    [HttpPost("logout")]
    public async ValueTask<IActionResult> Logout()
    {
        try
        {
            await _accountService.SignOutAsync(User.Identity?.GetUserId());
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