import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Player } from 'src/app/services/model/player';
import { Team } from 'src/app/services/model/team';

@Component({
  selector: 'app-myTeam',
  templateUrl: './myTeam.component.html',
  styleUrls: ['./myTeam.component.css']
})
export class MyTeamComponent implements OnInit {
  players: Player[];
  teamFantaId: string = localStorage.getItem('FantaTeamId');
  myPlayer: Player[];
  myTeam: Team = JSON.parse(localStorage.getItem('myTeam'));
  myPortieri: Player[];
  myDifensori: Player[];
  myCentrocampisti: Player[];
  myAttaccanti: Player[];
  constructor(private service: ApiService, private modalService: NgbModal, private toastr: ToastrService, private route: Router) {
    this.service.allPlayers().subscribe(
      (data: Player[]) => {
        this.players = data;
        this.myPlayer = this.players.filter(p => p.teamFantaId === this.teamFantaId);
        this.myTeam = JSON.parse(localStorage.getItem('myTeam'));
        this.myPortieri = this.myPlayer.filter(p => p.role === 'P');
        this.myDifensori = this.myPlayer.filter(p => p.role === 'D');
        this.myCentrocampisti = this.myPlayer.filter(p => p.role === 'C');
        this.myAttaccanti = this.myPlayer.filter(p => p.role === 'A');


      },
      (err) => {
      }
    );
    return;

  }
  ngOnInit(): void {
  }

}

