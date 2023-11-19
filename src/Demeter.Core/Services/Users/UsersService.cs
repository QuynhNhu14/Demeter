using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
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

    public async ValueTask<ICollection<Domain.Users>> GetAllAsync()
    {
        var entities = await _context.Users.ToListAsync();
        return _mapper.Map<IList<Domain.Users>>(entities);
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

    public async ValueTask AddAsync(Domain.Users user)
    {
        if (string.IsNullOrWhiteSpace(user.FullName))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.Users.FullName)} should not be empty.");
        }
            
        _context.Users.Add(_mapper.Map<Entities.Users>(user));
        await _context.SaveChangesAsync();
    }

    public async ValueTask Remove(Domain.Users user)
    {
        var entities = await _context.Users.ToListAsync();
        var result = entities.Find(t=> t.Id == user.Id);
        if (result is null)
        {
            throw new ValidationException($"Invalid: {user.FullName} is not existed.");
        }

        _context.Users.Remove(result);
        await _context.SaveChangesAsync();
    }
}