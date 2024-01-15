using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Demeter.Domain;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Users;

public class AccountService : IAccountService
{
    private readonly ICoreDbContext _context;
    private readonly IUserSessionContext _userSessionContext;
    private readonly IAuthContext _authContext;
    private readonly IMapper _mapper;

    public AccountService(ICoreDbContext context, IUserSessionContext userSessionContext, IMapper mapper, IAuthContext authContext)
    {
        _context = context;
        _userSessionContext = userSessionContext;
        _mapper = mapper;
        _authContext = authContext;
    }

    private bool IsUserExisted(Account account)
    {
        return _context.Users.Any(user => user.Id == account.User.Id);
    }

    public async ValueTask<ICollection<Account>> GetAllAsync()
    {
        var entities = await _context.Accounts.Include(t => t.User).ToListAsync();
        return _mapper.Map<IList<Account>>(entities);
    }

    public async ValueTask<Account> GetByIdAsync(Guid id)
    {
        var entity = await _context.Accounts.Include(t => t.User).FirstOrDefaultAsync(t => t.Id == id);
        return _mapper.Map<Account>(entity);
    }

    public async ValueTask UpdateAsync(ICollection<Account> accounts)
    {
        foreach (var account in accounts)
        {
            var entity = await _context.Accounts
                .FirstOrDefaultAsync(s => s.Id == account.Id);

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {account.Name} is not existed.");
            }

            _context.Accounts.Add(_mapper.Map<Entities.Account>(account));
            await _context.SaveChangesAsync();
        }
    }

    public async ValueTask<Account> AddAsync(Account account)
    {
        if (string.IsNullOrWhiteSpace(account.Name))
        {
            throw new ValidationException($"Invalid: {nameof(Account.Name)} should not be empty.");
        }
        
        if (IsUserExisted(account))
        {
            throw new ValidationException($"Invalid: {nameof(account.User)} is already existed!");
        }

        account.User ??= new Domain.Users();

        var entity = _context.Accounts.Add(_mapper.Map<Entities.Account>(account)).Entity;
        await _context.SaveChangesAsync();
        return _mapper.Map<Account>(entity);
    }

    public async ValueTask Remove(Guid id)
    {
        var entity = await _context.Accounts.Include(t => t.User).Where(t=> t.Id == id).FirstOrDefaultAsync();
        if (entity is null)
        {
            throw new ValidationException($"Invalid: {id} is not existed.");
        }

        if (entity.User is not null)
        {
            _context.Users.Remove(entity.User);
        }
        
        _context.Accounts.Remove(entity);
        await _context.SaveChangesAsync();
    }




}