using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fantacalcioApi.Data.Entities
{
    public class Team
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string User { get; set; }
        public List<Player> Giocatori { get; set; }
        public int FantaMilioni { get; set; }
        public string ChampionshipID { get; set; }
    }
}
