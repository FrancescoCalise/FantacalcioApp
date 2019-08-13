
using System;
using System.Collections.Generic;

namespace fantacalcioApi.Data.Entities
{
    public class Championship
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
        public string Anno { get; set; }
        public List<Team> Squadre { get; set; }
    }

}
