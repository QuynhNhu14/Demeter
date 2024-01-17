using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Demeter.Domain;

namespace Demeter.Core.Services.Users;

public class AccountService : IAccountService
{
    private readonly IAccountContext _accountContext;
    private readonly IMapper _mapper;

    public AccountService(IMapper mapper, IAccountContext accountContext)
    {
        _mapper = mapper;
        _accountContext = accountContext;
    }

    public async ValueTask UpdateAsync(Account accounts)
    {
        await _accountContext.UpdateAsync(_mapper.Map<Entities.Accounts.Account>(accounts));
    }

    public async ValueTask<Account> AddAsync(Account account)
    {
        account.User ??= new Domain.Users();
        var result = await _accountContext.CreateAccount(_mapper.Map<Entities.Accounts.Account>(account));

        if (!result.Succeeded)
        {
            throw new ValidationException(result.ToString());
        }
        return account;
    }

    public async ValueTask SignInAsync(LoginInfo loginInfo)
    {
        var account = await _accountContext.GetByUserName(loginInfo.Name);
        if (account is null)
        {
            throw new ValidationException("Invalid Credentials.");
        }

        var succeed = await _accountContext.CheckPassword(account, loginInfo.Password);
        if (!succeed)
        {
            throw new ValidationException("Login failed.");
        }
    }

    public async ValueTask SignOutAsync(string id)
    {
        var account = await _accountContext.GetByIdAsync(id);
        if (account is null)
        {
            throw new ValidationException("Invalid Credentials.");
        }
        await _accountContext.UpdateSecurityStampAsync(account);
    }
}