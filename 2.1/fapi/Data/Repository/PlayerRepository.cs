using fantacalcioApi.Data.Entities;
using fantacalcioApi.Data.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fantacalcioApi.Data.Repository
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly FantacalcioContext _context;

        public PlayerRepository(FantacalcioContext context)
        {
            _context = context;
        }

        public object addPlayerInTeam(AddPlayerInTeam player)
        {
            _context.Database.OpenConnection();

            Team findTeam = _context.Teams.FirstOrDefault(t => t.Id == Guid.Parse(player.TeamFantaId));
            Player playerComplete = _context.Players.FirstOrDefault(p => p.Id == player.Id);
            playerComplete.SoldValue = player.SoldValue;
            playerComplete.TeamFantaId = player.TeamFantaId;
            _context.Players.FirstOrDefault(p => p.Id == player.Id).SoldValue = playerComplete.SoldValue;
            _context.Players.FirstOrDefault(p => p.Id == player.Id).TeamFantaId = playerComplete.TeamFantaId;

            if (findTeam.Giocatori == null ? true : false)
            {
                _context.Teams.FirstOrDefault(t => t.Id == Guid.Parse(player.TeamFantaId)).Giocatori = new List<Player>();
            }
            _context.Teams.FirstOrDefault(t => t.Id == Guid.Parse(player.TeamFantaId)).Giocatori.Add(playerComplete);
            _context.Teams.FirstOrDefault(t => t.Id == Guid.Parse(player.TeamFantaId)).FantaMilioni= _context.Teams.FirstOrDefault(t => t.Id == Guid.Parse(player.TeamFantaId)).FantaMilioni - playerComplete.SoldValue;
            //todo: try change for same errors
            _context.SaveChanges();

            return "ok";
        }

        public IEnumerable<Player> GetPlayers()
        {
            return _context.Players
                .OrderBy(c => c.Name)
                .ToList();
       
        }

    }
}
