namespace Demeter.Core.Services.AppSettings;

public interface IAppSettingsService
{
    ValueTask<ICollection<Domain.AppSettings>> GetAllAsync();
    ValueTask UpdateAsync(ICollection<Domain.AppSettings> settings);
    ValueTask<Domain.AppSettings> AddAsync(Domain.AppSettings setting);
    ValueTask Remove(Domain.AppSettings setting);
    ValueTask<Domain.AppSettings?> GetById(string referenceKey);
}