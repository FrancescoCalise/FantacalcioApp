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

        public IEnumerable<Player> GetPlayers()
        {
            return _context.Players
                .OrderBy(c => c.Id)
                .ToList();
       
        }

    }
}
