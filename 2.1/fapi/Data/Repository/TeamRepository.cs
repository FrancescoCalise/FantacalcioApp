using fantacalcioApi.Data.Entities;
using fantacalcioApi.Data.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fantacalcioApi.Data.Repository
{
    public class TeamRepository : ITeamRepository
    {
        private readonly FantacalcioContext _context;

        public TeamRepository(FantacalcioContext context)
        {
            _context = context;
        }


        public IEnumerable<Team> GetTeams()
        {
            return _context.Teams
                .OrderBy(c => c.Anno)
                .ToList();
        }
        public string AddTeam(Team team)
        {
            _context.Database.OpenConnection();
            _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Teams] on");

            _context.Teams.Add(team);
            //todo: try change for same errors
            _context.SaveChanges();
            _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Teams] off");

            return "success";
        }



    }
}
