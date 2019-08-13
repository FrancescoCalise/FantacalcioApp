using System.Collections.Generic;
using fantacalcioApi.Data.Entities;

namespace fantacalcioApi.Data.Interface
{
    public interface ITeamRepository
    {
        string AddTeam(Team team);
        IEnumerable<Team> GetTeams();
    }
}