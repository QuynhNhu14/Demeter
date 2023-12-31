using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
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

    public async ValueTask<ICollection<Domain.Account>> GetAllAsync()
    {
        var entities = await _context.Accounts.ToListAsync();
        return _mapper.Map<IList<Domain.Account>>(entities);
    }

    public async ValueTask<ICollection<Domain.Account>> GetByName(string name)
    {
        var entities = await _context.Accounts.ToListAsync();
        var result = entities
            .Where(t => t.Name.ToLower().Trim().Contains(name.ToLower().Trim()))
            .ToList();
        return _mapper.Map<IList<Domain.Account>>(result);
    }

    public async ValueTask UpdateAsync(ICollection<Domain.Account> accounts)
    {
        foreach (var account in accounts)
        {
            var entity = await _context.Accounts
                .FirstOrDefaultAsync(s => s.Id == account.Id);

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {account.Name} is not existed.");
            }

            _context.Accounts.Entry(entity).CurrentValues.SetValues(_mapper.Map<Entities.Account>(account));
            await _context.SaveChangesAsync();
        }
    }

    public async ValueTask AddAsync(Domain.Account user)
    {
        if (string.IsNullOrWhiteSpace(user.Name))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.Account.Name)} should not be empty.");
        }

        _context.Accounts.Add(_mapper.Map<Entities.Account>(user));
        await _context.SaveChangesAsync();
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