using System;

namespace fantacalcioApi.Data.Entities
{
    public class Player
    {
        public int Id { get; set; }
        public string Role { get; set; }
        public string Name { get; set; }
        public double AverageFv { get; set; }
        public int StartValue { get; set; }
        public int CurrentValue { get; set; }
        public int SoldValue { get; set; }
        public Team FantaTeam { get; set; }
        public string Team { get; set; }
    }
}