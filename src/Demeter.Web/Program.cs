using Demeter.Core.Extensions;
using Demeter.Infrastructure.Extensions;
using Demeter.Web.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add configuration from appsettings.json
builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json");

const string myAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("http://localhost:3000/index.html",
                "http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

//Dependency Injection
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddUserSessionContext(builder.Configuration);
builder.Services.AddAuthContext();
builder.Services.AddCoreServices();

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(_ => true) // allow any origin
    //.WithOrigins("https://localhost:44351")); // Allow only this origin can also have multiple origins separated with comma
    .AllowCredentials()); // allow credentials

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();