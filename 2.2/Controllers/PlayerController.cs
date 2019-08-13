using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using ExcelDataReader;
using fantacalcioApi.Data;
using fantacalcioApi.Data.Entities;
using fantacalcioApi.Data.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace fantacalcioApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PlayerController : ControllerBase
    {
        private readonly FantacalcioContext _context;
        private readonly IPlayerRepository _playerRepository;
        private readonly ILogger<PlayerController> _logger;


        public PlayerController(FantacalcioContext context, IPlayerRepository playerRepository, ILogger<PlayerController> logger)
        {
            _context = context;
            _playerRepository = playerRepository;
            _logger = logger;
        }

        // GET api/championship
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Player>> Get()
        {
            try
            {
                return Ok(_playerRepository.GetPlayers());
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed:{ex}");

                return BadRequest($"failed:{ex}");
            }
        }
     
    }

}