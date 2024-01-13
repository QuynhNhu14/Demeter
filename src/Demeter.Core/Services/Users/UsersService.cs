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

    public async ValueTask<ICollection<Domain.Users>> GetAllAsync()
    {
        var entities = await _context.Users.ToListAsync();
        return _mapper.Map<IList<Domain.Users>>(entities);
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

    public async ValueTask<Domain.Users> AddAsync(Domain.Users user)
    {
        if (string.IsNullOrWhiteSpace(user.FullName))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.Users.FullName)} should not be empty.");
        }
            
        var entity = _context.Users.Add(_mapper.Map<Entities.Users>(user)).Entity;
        await _context.SaveChangesAsync();
        return _mapper.Map<Domain.Users>(entity);
    }

    public async ValueTask Remove(string id)
    {
        var entities = await _context.Users.ToListAsync();
        var result = entities.Find(t=> t.Id.ToString() == id);
        if (result is null)
        {
            throw new ValidationException($"Invalid: {id} is not existed.");
        }

        _context.Users.Remove(result);
        await _context.SaveChangesAsync();
    }
}