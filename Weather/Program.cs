using Microsoft.AspNetCore.Mvc;
using Weather.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddHttpClient<WeatherService>();
builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();

app.Run();
