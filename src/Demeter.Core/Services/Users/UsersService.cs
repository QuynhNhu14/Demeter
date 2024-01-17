using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Demeter.Domain;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Users;

public class UsersService : IUsersService
{
    private readonly ICoreDbContext _context;
    private readonly IMapper _mapper;

    public UsersService(ICoreDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async ValueTask<ICollection<Domain.Users>> GetAllUsersAsync()
    {
        var entities = await _context.Users.ToListAsync();
        return _mapper.Map<IList<Domain.Users>>(entities);
    }
    
    public async ValueTask<ICollection<Account>> GetAllAccountsAsync()
    {
        var entities = await _context.Accounts.Include(account => account.User).ToListAsync();
        return _mapper.Map<IList<Account>>(entities);
    }

    public async ValueTask<Domain.Users> GetById(Guid id)
    {
        var entity = await _context.Users.FirstOrDefaultAsync(user => user.Id == id);
        return _mapper.Map<Domain.Users>(entity);
    }
    
    public async ValueTask<Domain.Users> GetById(BaseEntity<Guid> domain)
    {
        var entity = await _context.Users.FirstOrDefaultAsync(user => user.Id == domain.Id);
        return _mapper.Map<Domain.Users>(entity);
    }

    public async ValueTask UpdateAsync(ICollection<Domain.Users> users)
    {
        foreach (var user in users)
        {
            var entity = await _context.Users
                .FirstOrDefaultAsync(s => s.Id == user.Id);

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {user.Id} is not existed.");
            }
            _context.Users.Entry(entity).CurrentValues.SetValues( _mapper.Map<Entities.Users>(user));
            await _context.SaveChangesAsync();
        }
    }
    
    public async ValueTask RemoveAsync(Guid id)
    {
        var entity = await _context.Accounts.Include(t => t.User).Where(t => t.Id == id).FirstOrDefaultAsync();
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