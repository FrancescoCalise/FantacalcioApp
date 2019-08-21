import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player, AddPlayer } from 'src/app/services/model/player';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/services/model/team';

@Component({
  selector: 'app-user-3',
  templateUrl: './addPlayerInTeam.html',
  styleUrls: ['../user.component.css']
})

export class AddAttaccanteInTeamModalComponent {
  model = new AddPlayer(null, null, null);
  players: Player[];
  playerFilter: Player[];
  teamFantaId: string = localStorage.getItem('FantaTeamId');
  myPlayers: Player[];
  soltEmpty: number;
  myTeam: Team = JSON.parse(localStorage.getItem('myTeam'));

  constructor(public activeModal: NgbActiveModal, private service: ApiService, private toastr: ToastrService) {
    this.service.allPlayers().subscribe(
      (data: Player[]) => {
        this.players = data;
        this.playerFilter = data.filter(p => p.role === 'A' && p.teamFantaId === '' && !p.name.endsWith('*'));
        this.myPlayers = this.players.filter(p => p.teamFantaId === this.teamFantaId);
        this.soltEmpty = 6 - this.myPlayers.filter(t => t.role === 'A').length;
      },
      (err) => {
      }
    );
    return;
  }

  save(id, soldValue) {
    if ( this.soltEmpty <= 0) {
      this.toastr.error('Non puoi comprare altri giocatori', 'Errore');
      return;
    }
    if ( this.myTeam.fantaMilioni - (25 - this.myPlayers.length) < soldValue) {
      this.toastr.error('budget non sufficiente', 'Errore');
      return;
    }
    this.service.addPlayerInTeam(id, soldValue, this.teamFantaId).subscribe((data) => {
      this.service.allTeam().subscribe(
        (team) => {
          const myTeam = team.find(t => t.id.toString() === this.teamFantaId);
          localStorage.removeItem('myTeam');
          localStorage.setItem('myTeam', JSON.stringify(myTeam));
          this.toastr.success(data, 'Giocatore salvato con successo');
          this.activeModal.close('Close click');
        }
      );
    }, (err) => {
      this.toastr.error(err.message, 'Errore');
    });
    return;
  }
}
