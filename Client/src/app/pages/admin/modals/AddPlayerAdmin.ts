import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Championship } from 'src/app/services/model/championship';
import { ToastrService } from 'ngx-toastr';
import { TeamClass, Team } from 'src/app/services/model/team';
import { Player, AddPlayer } from 'src/app/services/model/player';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-admin-3',
  templateUrl: './addPlayerAdmin.html',
  styleUrls: ['../admin.component.css']
})

export class AddPlayerAdminComponent implements OnInit {
  championships: Championship[];
  teamsFilter: Team[];
  teams: Team[];
  players: Player[];
  playerFilter: Player[];
  teamFantaId: string;
  model = new AddPlayer(null, null, null);
  championshipSelected: string;
  slotEmpty: number;
  myTeam: Team;
  constructor(public activeModal: NgbActiveModal, private service: ApiService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.service.allPlayers().subscribe(
      (data: Player[]) => {
        this.players = data;
        this.playerFilter = data.filter(p => p.teamFantaId === '' && !p.name.endsWith('*'));
        this.model.id = this.playerFilter[0].id;
        this.model.soldValue = 1;
        this.service.allChampionship().subscribe(
          (championships) => {
            this.championships = championships;
            this.championshipSelected = this.championships[0].id.toString();
            this.service.allTeam().subscribe(
              (teams) => {
                this.teams = teams;
                this.teamsFilter = this.teams.filter(t => t.championshipFantaId == Guid.parse(this.championshipSelected));
                this.myTeam = this.teamsFilter[0];
                this.model.teamFantaId = this.teamsFilter[0].id;
                this.CheckSlot(this.playerFilter[0].id);
              },
              (err) => {
                this.toastr.error(err.message, 'Errore');
              });
          },
          (err) => {
            this.toastr.error(err.message, 'Errore');
          });
      },
      (err) => {
      }
    );
  }
  update(championship: string) {
    this.teamsFilter = this.teams.filter(t => t.championshipFantaId.toString() === championship);
    this.myTeam = this.teamsFilter[0];
    this.CheckSlot(this.model.id);
    if (this.teamsFilter.length > 0) {
      this.model.teamFantaId = this.teamsFilter[0].id;
    } else {
      this.model.teamFantaId = null;
      this.toastr.error('non ci sono squadre per la lega scelta', 'Errore');
    }
  }
  updateTeam() {
    this.myTeam = this.teamsFilter.find(f => f.id === this.model.teamFantaId );
    this.CheckSlot(this.model.id);
  }
  updatePlayer() {
    this.CheckSlot(this.model.id);
  }

  save(teamFantaId: string, id: number, soldValue: number ) {
    if ( this.slotEmpty <= 0) {
      this.toastr.error('Non puoi comprare altri giocatori', 'Errore');
      return;
    }
    if ( this.myTeam.fantaMilioni - (25 - this.myTeam.giocatori) <= soldValue) {
      this.toastr.error('budget non sufficiente', 'Errore');
      return;
    }
    this.service.addPlayerInTeam(id, soldValue, teamFantaId).subscribe((data) => {
      this.service.allTeam().subscribe(
        (team) => {
          this.toastr.success(data, 'Giocatore salvato con successo');
          this.activeModal.close('Close click');
        }
      );
    }, (err) => {
      this.toastr.error(err.message, 'Errore');
    });
    return;
  }

  CheckSlot(id) {
    debugger
    let slotBusy: number;
    const playerSelected: Player = this.players.find(p => p.id === id);
    switch (playerSelected.role) {
      case 'P': {
        slotBusy = this.players.filter(p => p.role === 'P' && p.teamFantaId === this.myTeam.id ).length;
        this.slotEmpty =  3 - slotBusy;
        break;
      }
      case 'D': {
        slotBusy = this.players.filter(p => p.role === 'D' && p.teamFantaId === this.myTeam.id ).length;
        this.slotEmpty =  8 - slotBusy;
        break;
      }
      case 'C': {
        slotBusy = this.players.filter(p => p.role === 'C' && p.teamFantaId === this.myTeam.id ).length;
        this.slotEmpty =  8 - slotBusy;
        break;
      }
      case 'A': {
        slotBusy = this.players.filter(p => p.role === 'A' && p.teamFantaId === this.myTeam.id ).length;
        this.slotEmpty =  6 - slotBusy;
        break;
      }
    }
  }
}

