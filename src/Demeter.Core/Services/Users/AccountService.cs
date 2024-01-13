using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Demeter.Domain;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Users;

public class AccountService : IAccountService
{
    private readonly ICoreDbContext _context;
    private readonly IMapper _mapper;

    public AccountService(ICoreDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    private bool ValidUser(Account account)
    {
        return !_context.Users.Any(user => user.Id == account.User.Id);
    }

    public async ValueTask<ICollection<Account>> GetAllAsync()
    {
        var entities = await _context.Accounts.ToListAsync();
        return _mapper.Map<IList<Account>>(entities);
    }

    public async ValueTask<ICollection<Account>> GetByName(string name)
    {
        var entities = await _context.Accounts.ToListAsync();
        var result = entities
            .Where(t => t.Name.ToLower().Trim().Contains(name.ToLower().Trim()))
            .ToList();
        return _mapper.Map<IList<Account>>(result);
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
        
        if (!ValidUser(account))
        {
            throw new ValidationException($"Invalid: {nameof(account.User)} is already existed!");
        }

        account.User ??= new Domain.Users();

        var entity = _context.Accounts.Add(_mapper.Map<Entities.Account>(account)).Entity;
        await _context.SaveChangesAsync();
        return _mapper.Map<Account>(entity);
    }

    public async ValueTask Remove(string id)
    {
        var entities = await _context.Accounts.ToListAsync();
        var result = entities.Find(t => t.Id.ToString() == id);
        if (result is null)
        {
            throw new ValidationException($"Invalid: {id} is not existed.");
        }

        _context.Accounts.Remove(result);
        await _context.SaveChangesAsync();
    }
}