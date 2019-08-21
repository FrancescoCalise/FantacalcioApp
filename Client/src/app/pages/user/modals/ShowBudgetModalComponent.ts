import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/services/model/team';
import { Championship } from 'src/app/services/model/championship';

@Component({
  selector: 'app-user-4',
  templateUrl: './showBudget.html',
  styleUrls: ['../user.component.css']
})

export class ShowBudgetModalComponent {
  teamFantaId: string = localStorage.getItem('FantaTeamId');
  champishipId: string = localStorage.getItem('ChampionshipId');
  teams: Team[];
  teamsFilter: Team[];
  championships: Championship[];
  myChampionship: Championship;

  constructor(public activeModal: NgbActiveModal, private service: ApiService, private toastr: ToastrService) {
    this.service.allChampionship().subscribe(
      (data) => {
        this.championships = data;
        this.myChampionship = data.find(t => t.id.toString() === this.champishipId);
      }, (err) => {
        this.toastr.error(err.message, 'Errore');
      });

    this.service.allTeam().subscribe(
      (data) => {
        this.teams = data;
        this.teamsFilter = data.filter(t => t.championshipFantaId === this.teams.find(
          x => x.id.toString() === this.teamFantaId).championshipFantaId);
      }, (err) => {
        this.toastr.error(err.message, 'Errore');
      });
    return;
  }
}
