using System.ComponentModel.DataAnnotations;
using Demeter.Core.Services.Products;
using Demeter.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Demeter.Web.Controllers;

[ApiController]
[Route("api/products")]
public class ProductsController: ControllerBase
{
    private readonly ILogger<ProductsController> _logger;
    private readonly IProductsService _productsService;
    private readonly ICategoryService _categoryService;
    private readonly IPriceService _priceService;

    public ProductsController(ILogger<ProductsController> logger, IProductsService productsService, ICategoryService categoryService, IPriceService priceService) {
        _logger = logger;
        _productsService = productsService;
        _categoryService = categoryService;
        _priceService = priceService;
    }

    [HttpGet]
    public async Task<ActionResult<ICollection<Domain.Products>>> GetProducts()
    {
        try
        {
            var products = await _productsService.GetAllAsync();
            return Ok(products);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("categories")]
    public async Task<ActionResult<ICollection<Domain.Category>>> GetCategories()
    {
        try
        {
            var categories = await _categoryService.GetAllAsync();
            return Ok(categories);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("prices")]
    public async Task<ActionResult<ICollection<Domain.Prices>>> GetPrices()
    {
        try
        {
            var prices = await _priceService.GetAllAsync();
            return Ok(prices);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost]
    public async ValueTask<IActionResult> AddNewProductAsync([FromBody] Domain.Products product)
    {
        try
        {
            await _productsService.AddAsync(product);
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

    [HttpPost("update")]
    public async ValueTask<IActionResult> UpdateProductsAsync([FromBody] ICollection<Domain.Products> products)
    {
        try
        {
            await _productsService.UpdateAsync(products);
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

    [HttpDelete]
    public async ValueTask<IActionResult> DeleteProductAsync([Required] string id)
    {
        try
        {
            await _productsService.Remove(id);
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

    [HttpDelete("prices")]
    public async ValueTask<IActionResult> DeletePricesAsync([Required] string id)
    {
        try
        {
            await _priceService.Remove(id);
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

    [HttpDelete("categories")]
    public async ValueTask<IActionResult> DeleteCategoriesAsync([Required] string id)
    {
        try
        {
            await _categoryService.Remove(id);
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