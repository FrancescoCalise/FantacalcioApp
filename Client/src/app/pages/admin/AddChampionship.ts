import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChampionshipClass } from 'src/app/services/model/championship';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-1',
  templateUrl: './modals/addChampionship.html',
  styleUrls: ['./admin.component.css']
})

export class AddChampionship {

  model = new ChampionshipClass(null, null);
  constructor(public activeModal: NgbActiveModal, private service: ApiService, private toastr: ToastrService) {
  }
  save(name, anno) {
    this.service.addChampionship(name, anno).subscribe((data) => {
      this.toastr.success(data, 'OK');
      this.activeModal.close('Close click');
    }, (err) => {
      this.toastr.error(err.message, 'Errore');
    });
    return;
  }
}
