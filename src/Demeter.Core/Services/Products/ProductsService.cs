using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Demeter.Core.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Demeter.Core.Services.Products;

public class ProductsService : IProductsService
{
    private readonly ICoreDbContext _context;
    private readonly IMapper _mapper;

    public ProductsService(ICoreDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async ValueTask<ICollection<Domain.Products>> GetAllAsync()
    {
        var entities = await _context.Products.ToListAsync();
        return _mapper.Map<IList<Domain.Products>>(entities);
    }
    
    public async ValueTask<ICollection<Domain.Products>> GetByName(string name)
    {
        var entities = await _context.Products.ToListAsync();
        var result = entities
            .Where(t => t.Name.ToLower().Trim().Contains(name.ToLower().Trim()))
            .ToList();
        return _mapper.Map<IList<Domain.Products>>(result);
    }

    public async ValueTask UpdateAsync(ICollection<Domain.Products> products)
    {
        foreach (var product in products)
        {
            var entity = await _context.Products
                .FirstOrDefaultAsync(s => s.Id == product.Id);

            if (entity is null)
            {
                throw new ValidationException($"Invalid: {product.Name} is not existed.");
            }

            _context.Products.Entry(entity).CurrentValues.SetValues(_mapper.Map<Entities.Products>(product));
            await _context.SaveChangesAsync();
        }
    }

    public async ValueTask AddAsync(Domain.Products product)
    {
        if (string.IsNullOrWhiteSpace(product.Name))
        {
            throw new ValidationException($"Invalid: {nameof(Domain.Products.Name)} should not be empty.");
        }

        _context.Products.Add(_mapper.Map<Entities.Products>(product));
        await _context.SaveChangesAsync();
    }

    public async ValueTask Remove(string id)
    {
        var entities = await _context.Products.ToListAsync();
        var result = entities.Find(t => t.Id.ToString() == id);
        if (result is null)
        {
            throw new ValidationException($"Invalid: {id} is not existed.");
        }

        _context.Products.Remove(result);
        await _context.SaveChangesAsync();
    }
}