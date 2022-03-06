using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence

{
    public class Seed
    {
        public static Guid lenda1 = new Guid();
        public static Guid lenda2 = new Guid();
        public static Guid lenda3 = new Guid();


        public static async Task SeedData(DataContext context, UserManager<AppAdmin> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppAdmin>{
                    new AppAdmin{DisplayName = "Bob",UserName="bob",Email="bob@test.com"},
                    new AppAdmin{DisplayName = "Jerry",UserName="Jerry",Email="Jerry@test.com"},
                    new AppAdmin{DisplayName = "Test",UserName="Test",Email="Test@test.com"}

                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            await context.SaveChangesAsync();
        }
       
        //seed data for Professor
        public static async Task SeedDataProf(DataContext context, UserManager<Profesori> userManager)
        {

            if (!userManager.Users.Any())
            {
                var prinderit = new List<Profesori>
                {
                    new Profesori{Name = "prof", UserName="p1", Email = "prof@test.com",Lenda = new Lenda
                    {
                        LendaId = lenda2,
                        EmriLendes = "Lenda Seed 1",
                        Pershkrimi = "Pershkrimi Seed lenda 1",
                        Syllabusi = new Syllabusi{
                            SyllabusiId = new Guid(),
                            EmriSyllabusit = "Syllabusi 1",
                            LinkuISyllabusit = "www.google.com",
                            DataEKrijimit = DateTime.Now
                        }

                    }},
                    new Profesori{Name = "prof2", UserName="p2", Email = "prof2@test.com",Lenda = new Lenda
                    {
                        LendaId = lenda1,
                        EmriLendes = "Lenda Seed 2",
                        Pershkrimi = "Pershkrimi Seed lenda 2",
                        Syllabusi = new Syllabusi{
                            SyllabusiId = new Guid(),
                            EmriSyllabusit = "Syllabusi 2",
                            LinkuISyllabusit = "www.google.com",
                            DataEKrijimit = DateTime.Now
                        }

                    }},
                    new Profesori{Name = "prof3", UserName="p3", Email = "prind3@test.com",Lenda = new Lenda
                    {
                        LendaId = lenda1,
                        EmriLendes = "Lenda Seed 3",
                        Pershkrimi = "Pershkrimi Seed lenda 3",
                        Syllabusi = new Syllabusi{
                            SyllabusiId = new Guid(),
                            EmriSyllabusit = "Syllabusi 3",
                            LinkuISyllabusit = "www.google.com",
                            DataEKrijimit = DateTime.Now
                        }

                    }}
                };

                foreach (var prindi in prinderit)
                {
                    await userManager.CreateAsync(prindi, "Pa$$w0rd");
                }
            }

        }

        public static async Task SeedDataPrind(DataContext context, UserManager<Prindi> userManager)
        {
            if (!userManager.Users.Any())
            {
                var prinderit = new List<Prindi>
                {
                    new Prindi{DisplayName = "prind1", UserName="p1", Email = "prind1@gmail.com"},
                    new Prindi{DisplayName = "prind2", UserName="p2", Email = "prind2@gmail.com"},
                    new Prindi{DisplayName = "prind3", UserName="p3", Email = "prind3@gmail.com"}
                };

                foreach (var prindi in prinderit)
                {
                    await userManager.CreateAsync(prindi, "Pa$$w0rd");
                }
            }
        }
        //seed for Nxenesi
        public static async Task SeedDataNxenesit(DataContext context, UserManager<Nxenesi> userManager)
        {
            if (!userManager.Users.Any())
            {
                var nxenesit = new List<Nxenesi>
                {
                    new Nxenesi{DisplayName = "Sadete Dragaj", FullName = "Sadete Dragaj", ParentName = "Shaqir", DateOfBirth = new DateTime(2002, 10, 28), Class = "XI/1", PhoneNumber = "044-111-600", YearOfRegistration = 2019, UserName= "sadetedragaj", Email= "sadetedragaj@student.edu"},
                    new Nxenesi{DisplayName = "Ruana Zeqiri", FullName = "Ruana Zeqiri", ParentName = "Besnik", DateOfBirth = new DateTime(2002, 10, 28), Class = "X/3", PhoneNumber = "044-223-620", YearOfRegistration = 2018, UserName= "ruanazeqiri", Email= "ruanazeqiri@student.edu"},
                    new Nxenesi{DisplayName = "Albion Jakupi", FullName = "Albion Jakupi", ParentName = "Fatmir", DateOfBirth = new DateTime(2004, 10, 10), Class = "XII/1", PhoneNumber = "044-043-450", YearOfRegistration = 2017, UserName= "albionjakupi", Email= "albionjakupi@student.edu"}

                };

                foreach (var nxenesi in nxenesit)
                {
                    await userManager.CreateAsync(nxenesi, "Pa$$w0rd");
                }
            }

        }
       
    }

}

