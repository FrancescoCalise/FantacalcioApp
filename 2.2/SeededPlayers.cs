using ExcelDataReader;
using fantacalcioApi.Controllers;
using fantacalcioApi.Data;
using fantacalcioApi.Data.Entities;
using fantacalcioApi.Data.Interface;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace fantacalcioApi
{
    public class SeededPlayers
    {
        private readonly FantacalcioContext _context;
        private readonly IPlayerRepository _playerRepository;
        private readonly ILogger<PlayerController> _logger;

        public SeededPlayers(FantacalcioContext context, IPlayerRepository playerRepository, ILogger<PlayerController> logger)
        {
            _context = context;
            _playerRepository = playerRepository;
            _logger = logger;
        }

        public void LoadPlayers()
        {
            //todo : if contex
            if (_context.Players == null)
            {

                string filePath = @"C:\Users\Francesco\Desktop\FantacalcioTeam\fantacalcioApi\Data\File\ListaSvincolati_magic-forio-cup.xlsx";

                FileStream stream = File.Open(filePath, FileMode.Open, FileAccess.Read);

                System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
                IExcelDataReader excelReader = ExcelReaderFactory.CreateOpenXmlReader(stream);

                DataSet result = excelReader.AsDataSet(new ExcelDataSetConfiguration()
                {
                    ConfigureDataTable = (_) => new ExcelDataTableConfiguration()
                    {
                        UseHeaderRow = false,

                    }
                });

                List<Player> players = new List<Player>();

                //5. Data Reader methods
                foreach (DataRow item in result.Tables[0].Rows)
                {
                    Player player = new Player();
                    var x = item[0];

                    player.Id = Convert.ToInt32(item[0]);
                    player.Role = (string)item[1];
                    player.Name = (string)item[2];
                    player.Team = (string)item[3];
                    player.AverageFv = (double)item[4];
                    player.StartValue = Convert.ToInt32(item[5]);
                    player.CurrentValue = Convert.ToInt32(item[6]);
                    player.SoldValue = 0;

                    player.FantaTeam = null;

                    players.Add(player);
                }
            }



        }
    }
}
