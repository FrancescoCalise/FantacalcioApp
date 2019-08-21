import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/services/model/player';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddChampionship } from './AddChampionship';
import { AddTeam } from './AddTeam';

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
    this.modalService.open(AddChampionship, {
      size: 'lg'
    });
  }
  openAddTeamModal() {
    this.modalService.open(AddTeam, {
      size: 'lg'
    });
  }

}


