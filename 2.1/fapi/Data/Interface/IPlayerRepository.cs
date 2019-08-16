using System.Collections.Generic;
using fantacalcioApi.Data.Entities;

namespace fantacalcioApi.Data.Interface
{
    public interface IPlayerRepository
    {
        IEnumerable<Player> GetPlayers();
        object addPlayerInTeam(AddPlayerInTeam player);
    }
}