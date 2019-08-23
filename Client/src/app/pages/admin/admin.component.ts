import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/services/model/player';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddChampionshipComponent } from './modals/AddChampionship';
import { AddTeamComponent } from './modals/AddTeam';
import { AddPlayerAdminComponent } from './modals/AddPlayerAdmin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  Player: Player[];
  constructor(private service: ApiService, private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  openAddChampshipModal() {
    this.modalService.open(AddChampionshipComponent, {
      size: 'lg'
    });
  }
  openAddTeamModal() {
    this.modalService.open(AddTeamComponent, {
      size: 'lg'
    });
  }
  openAddPlayer() {
    this.modalService.open(AddPlayerAdminComponent, {
      size: 'lg'
    });
  }
}


