import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Championship } from 'src/app/services/model/championship';
import { ToastrService } from 'ngx-toastr';
import { TeamClass } from 'src/app/services/model/team';

@Component({
  selector: 'app-admin-1',
  templateUrl: './modals/addTeam.html',
  styleUrls: ['./admin.component.css']
})

export class AddTeam {

  model = new TeamClass(null, null, null);
  allchampionships: Championship[];
  constructor(public activeModal: NgbActiveModal, private service: ApiService, private toastr: ToastrService) {
    this.service.allChampionship().subscribe((data) => {
      this.allchampionships = data;
      this.model.championshipFantaId = this.allchampionships[0].id;
    }, (err) => {
      this.toastr.error(err.message, 'Errore');
    });
  }
  save(name, user, championship) {
    const champ = this.allchampionships.find(f => f.id === championship);
    this.service.addTeam(name, user, champ.id).subscribe((data) => {
      this.toastr.success(data, 'Squadra creata con successo');
      this.activeModal.close('Close click');
    }, (err) => {
      this.toastr.error(err.message, 'Errore');
    });
    return;
  }
}
