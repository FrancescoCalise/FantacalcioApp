
using System;
using System.Collections.Generic;
using System.IO;
using ExcelDataReader;
using fantacalcioApi.Data;
using fantacalcioApi.Data.Entities;
using fantacalcioApi.Data.Interface;
using fantacalcioApi.Data.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Linq;
using System.Data;

namespace fantacalcioApi
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private FantacalcioContext _context;
        public Startup(IConfiguration config)
        {
            _config = config;

        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IChampionshipRepository, ChampionshipRepository>();
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<IPlayerRepository, PlayerRepository>();

            services.AddDbContext<FantacalcioContext>
                (options => options.UseSqlServer(_config.GetConnectionString("FantacalcioString")));

            _context = services.BuildServiceProvider()
                      .GetService<FantacalcioContext>();

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            if (_context.Players.Count() == 0)
            {
                LoadPlayers();
            }
            app.UseCors(builder =>
               builder
                      .AllowAnyOrigin()
                      .AllowAnyHeader()
                      .AllowAnyMethod()
               );
            app.UseHttpsRedirection();
            app.UseMvc();
        }

        public void LoadPlayers()
        {
            //todo : if contex
            
                string filePath = @"C:\Users\Francesco Calise\Desktop\fapi\fapi\Data\File\ListaSvincolati_magic-forio-cup.xlsx";

                FileStream stream = File.Open(filePath, FileMode.Open, FileAccess.Read);

                System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
                IExcelDataReader excelReader = ExcelReaderFactory.CreateOpenXmlReader(stream);

                DataSet result = excelReader.AsDataSet(new ExcelDataSetConfiguration()
                {
                    ConfigureDataTable = (_) => new ExcelDataTableConfiguration()
                    {
                        UseHeaderRow = false,

                    }
                });

                List<Player> players = new List<Player>();

                //5. Data Reader methods
                foreach (DataRow item in result.Tables[0].Rows)
                {
                    Player player = new Player();
                    var x = item[0];

                    player.Id = Convert.ToInt32(item[0]);
                    player.Role = (string)item[1];
                    player.Name = (string)item[2];
                    player.Team = (string)item[3];
                    player.AverageFv = (double)item[4];
                    player.StartValue = Convert.ToInt32(item[5]);
                    player.CurrentValue = Convert.ToInt32(item[6]);
                    player.SoldValue = 0;
                    player.FantaTeam = null;


                    _context.Players.Add(player);
                    Save();
                }
        }


        public string Save()
        {
            _context.Database.OpenConnection();
            _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Players] on");

            _context.SaveChanges();
            _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Players] off");

            return "success";
        }
    }
}
