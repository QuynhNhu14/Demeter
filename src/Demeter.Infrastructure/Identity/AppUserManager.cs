using AutoMapper;
using Demeter.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Demeter.Infrastructure.Identity;
public class AppUserManager : UserManager<User>
{
    private readonly IMapper _mapper;
    public AppUserManager(IUserStore<User> store,
        IOptions<IdentityOptions> optionsAccessor,
        IPasswordHasher<User> passwordHasher,
        IEnumerable<IUserValidator<User>> userValidators,
        IEnumerable<IPasswordValidator<User>> passwordValidators,
        ILookupNormalizer keyNormalizer,
        IdentityErrorDescriber errors,
        IServiceProvider services,
        ILogger<AppUserManager> logger, IMapper mapper) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer,
        errors, services, logger)
    {
        _mapper = mapper;
    }

    public async Task<IdentityResult> CreateAsync(Domain.User user)
    {
        return await base.CreateAsync(_mapper.Map<User>(user));
    }

    public async Task<SignInResult> CheckPasswordSignInAsync(User user, string password, bool lockoutOnFailure)
    {
        if (user == null)
        {
            throw new ArgumentNullException(nameof(user));
        }

        var passwordVerificationResult = PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
        if (passwordVerificationResult == PasswordVerificationResult.Failed)
        {
            if (lockoutOnFailure)
            {
                await AccessFailedAsync(user);
            }
            return SignInResult.Failed;
        }

        if (passwordVerificationResult == PasswordVerificationResult.SuccessRehashNeeded)
        {
            await UpdatePasswordHash(user, password, validatePassword: false);
            await UpdateAsync(user);
        }

        if (lockoutOnFailure)
        {
            await ResetAccessFailedCountAsync(user);
        }

        return SignInResult.Success;
    }

}