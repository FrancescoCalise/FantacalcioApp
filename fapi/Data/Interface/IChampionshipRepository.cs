using System;
using System.Collections.Generic;
using fantacalcioApi.Data.Entities;

namespace fantacalcioApi.Data.Interface
{
    public interface IChampionshipRepository
    {
        string AddChampionship(Championship championship);
        IEnumerable<Championship> GetChampionships(Guid guid);
        IEnumerable<Championship> GetAllChampionships();
    }
}