using fantacalcioApi.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fantacalcioApi.Data.Interface;

namespace fantacalcioApi.Data.Repository
{
    public class ChampionshipRepository : IChampionshipRepository
    {
        private readonly FantacalcioContext _context;

        public ChampionshipRepository(FantacalcioContext context)
        {
            _context = context;
        }

        public string AddChampionship(Championship championship)
        {
            _context.Database.OpenConnection();
            _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Championships] on");

            _context.Championships.Add(championship);
            //todo: try change for same errors
            _context.SaveChanges();
            _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Championships] off");

            return "success";
        }

        public IEnumerable<Championship> GetChampionships(Guid guid)
        {
            return _context.Championships
                 .Include(c => c.Squadre)
                 .Where(c => c.Id == guid);

        }

        public IEnumerable<Championship> GetAllChampionships()
        {
            return _context.Championships
                 .Include(c => c.Squadre)
                 .OrderBy(c => c.Anno)
                 .ToList();
        }
    }
}
