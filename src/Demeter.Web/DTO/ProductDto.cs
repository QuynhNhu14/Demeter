using Demeter.Domain;

namespace Demeter.Web.DTO;

public class ProductDto: Products
{
    public ICollection<Voucher> Vouchers { get; set; }

    public ProductDto(Products product, ICollection<Voucher> vouchers)
    {
        this.Name = product.Name;
        this.Description = product.Description;
        this.ImageUrl = product.ImageUrl;
        this.Id = product.Id;
        this.BaseUnitPrice = product.BaseUnitPrice;
        this.DateModified = product.DateModified;
        this.DateCreated = product.DateCreated;
        this.Rate = product.Rate;
        this.Vendor = product.Vendor;
        this.Category = product.Category;
        
        Vouchers = vouchers;
        
    }
}