using System;
using System.Collections.Generic;
using System.Linq;
using fantacalcioApi.Data;
using fantacalcioApi.Data.Entities;
using fantacalcioApi.Data.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace fantacalcioApi.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TeamController : ControllerBase
    {
        private readonly FantacalcioContext _context;
        private readonly ITeamRepository _teamRepository;
        private readonly ILogger<TeamController> _logger;


        public TeamController(FantacalcioContext context, ITeamRepository teamRepository, ILogger<TeamController> logger)
        {
            _context = context;
            _teamRepository = teamRepository;
            _logger = logger;
        }
        // GET api/team
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Championship>> Get()
        {
            try
            {
                return Ok(_teamRepository.GetTeams());
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed:{ex}");

                return BadRequest($"failed:{ex}");
            }

        }
        // Save api/team
        [Route("addTeam")]
        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Team>> AddTeam(Team team)
        {
            team.FantaMilioni = 500;
            team.Id = new Guid();


            try
            {
               var result = _teamRepository.AddTeam(team);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed:{ex}");

                return BadRequest($"failed:{ex}");
            }

        }

    }

}