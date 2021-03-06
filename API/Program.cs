using System;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;

            try
            {

                var context = services.GetRequiredService<DataContext>();
                var userManager = services.GetRequiredService<UserManager<AppAdmin>>();
                var userManagerProf = services.GetRequiredService<UserManager<Profesori>>();
                var prindiManager = services.GetRequiredService<UserManager<Prindi>>();
                var nxenesiManager = services.GetRequiredService<UserManager<Nxenesi>>();
                await context.Database.MigrateAsync();
                 await Seed.SeedData(context, userManager);
                 await Seed.SeedDataProf(context, userManagerProf);
                 await Seed.SeedDataPrind(context, prindiManager);
                await Seed.SeedDataNxenesit(context, nxenesiManager);
                await context.Database.MigrateAsync();
            }
            catch (Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occured during migration");
            }
            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
