import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player, AddPlayer } from 'src/app/services/model/player';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-1',
  templateUrl: './addPlayerInTeam.html',
  styleUrls: ['../user.component.css']
})

export class AddPortiereInTeamModalComponent {
  model = new AddPlayer(null, null, null);
  players: Player[] = JSON.parse(localStorage.getItem('Player'));
  playerFilter: Player[];
  teamFantaId: string = localStorage.getItem('FantaTeamId');

  constructor(public activeModal: NgbActiveModal, private service: ApiService, private toastr: ToastrService) {
    this.playerFilter = this.players.filter(p => p.role === 'P' && p.teamFantaId === '');
  }

  save(id, soldValue) {
    this.service.addPlayerInTeam(id, soldValue, this.teamFantaId).subscribe((data) => {
      this.toastr.success(data, 'Giocatore salvato con successo');
      this.activeModal.close('Close click');
    }, (err) => {
      this.toastr.error(err.message, 'Errore');
    });
    return;
  }
}
