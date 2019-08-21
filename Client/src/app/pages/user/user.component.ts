import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AddPortiereInTeamModalComponent } from './modals/AddPortiereInTeamModal';
import { AddDifensoreInTeamModalComponent } from './modals/AddDifensoreInTeamModal';
import { AddCentrocampistaInTeamModalComponent } from './modals/AddCentrocampistaInTeamModal';
import { AddAttaccanteInTeamModalComponent } from './modals/AddAttaccanteInTeamModal';
import { ShowBudgetModalComponent } from './modals/ShowBudgetModalComponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service: ApiService, private modalService: NgbModal, private toastr: ToastrService, private route: Router) {

  }

  ngOnInit() {
  }

  openAddPPortiereInTeamModal() {
    this.modalService.open(AddPortiereInTeamModalComponent, {
      size: 'lg'
    });
  }
  openAddDifensoreInTeamModal() {
    this.modalService.open(AddDifensoreInTeamModalComponent, {
      size: 'lg',
    });
  }
  openAddCentrocampistaInTeamModal() {
    this.modalService.open(AddCentrocampistaInTeamModalComponent, {
      size: 'lg',
    });
  }
  openAddAttaccanteInTeamModal() {
    this.modalService.open(AddAttaccanteInTeamModalComponent, {
      size: 'lg',
    });
  }
  openChangePlayer() {
    this.toastr.error('funzione non implementata', 'STOP');
  }
  openShowBudget() {
    this.modalService.open(ShowBudgetModalComponent, {
      size: 'lg',
    });
  }
  goToMyTeam() {
    this.route.navigate(['/myTeam']);
  }
}


