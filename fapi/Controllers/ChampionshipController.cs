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
    public class ChampionshipController : ControllerBase
    {
        private readonly FantacalcioContext _context;
        private readonly IChampionshipRepository _championshipRepository;
        private readonly ILogger<ChampionshipController> _logger;
        public  ChampionshipController(FantacalcioContext context, IChampionshipRepository championshipRepository, ILogger<ChampionshipController> logger)
        {
            _context = context;
            _championshipRepository = championshipRepository;
            _logger = logger;
        }

        // GET api/championship
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Championship>> GetAll()
        {
            try
            {
                return Ok(_championshipRepository.GetAllChampionships());
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed:{ex}");

                return BadRequest($"failed:{ex}");
            }
             
        }
        // GET api/championship
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Championship>> Get(Guid guidId)
        {
            try
            {
                return Ok(_championshipRepository.GetChampionships(guidId));
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed:{ex}");

                return BadRequest($"failed:{ex}");
            }

        }
        // Save api/championship
        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Championship>> AddChampionship(Championship championship)
        {
            
            try
            {
                return Ok(_championshipRepository.AddChampionship(championship));
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed:{ex}");

                return BadRequest($"failed:{ex}");
            }

        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public ActionResult<string> Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
