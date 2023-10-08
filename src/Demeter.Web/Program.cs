using Demeter.Core.Extensions;
using Demeter.Infrastructure.Extensions;
using Demeter.Infrastructure.Persistence;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add configuration from appsettings.json
builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json");


// Add services to the container.

//Dependency Injection
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddCoreServices();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Add services to the container.

var ConnectionStrings = builder.Configuration.GetConnectionString("DemeterCon");
builder.Services.AddDbContext<DemeterContext>(option => option.UseSqlServer(ConnectionStrings));
builder.Services.AddControllersWithViews();
builder.services.AddSingleton<IConfiguration>(DemeterCon.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
