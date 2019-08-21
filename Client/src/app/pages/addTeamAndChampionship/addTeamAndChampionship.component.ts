  import { Component, OnInit } from '@angular/core';
  import { ApiService } from 'src/app/services/api.service';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import { ToastrService } from 'ngx-toastr';
  import { Team } from 'src/app/services/model/team';
  import { Championship } from 'src/app/services/model/championship';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-addTeamAndChampionship',
    templateUrl: './addTeamAndChampionship.component.html',
    styleUrls: ['./addTeamAndChampionship.component.css']
  })
  export class AddTeamAndChampionshipComponent implements OnInit {
    teams :Team[];
    teamsFilter: Team[];
    championships: Championship[];
    model = new TeamChampionship('','');
    showSelectTeam:boolean= false;
    constructor(private service: ApiService,private modalService: NgbModal,private toastr: ToastrService,private route: Router) {
      this.service.allChampionship().subscribe(
        (data)=>{
          this.championships = data;
      },
      (err) => {
        this.toastr.error(err.message,'Errore');
      }) 
      this.service.allTeam().subscribe(
        (data)=>{
          this.teams= data;
      },
      (err) => {
        this.toastr.error(err.message,'Errore');
      })
    }

    ngOnInit() {
      
    }
    update(championship: string){
      
      this.teamsFilter = this.teams.filter(t => t.championshipFantaId.toString() == championship)
      if(this.teamsFilter.length > 0){
        this.showSelectTeam = true;
      }else{
        this.toastr.error('non ci sono squadre per la lega scelta','Errore');
        this.showSelectTeam = false;
      }
    }
    save(championshipid:string,teamid:string){
      localStorage.setItem('ChampionshipId', championshipid);
      localStorage.setItem('FantaTeamId', teamid);
      this.route.navigate(['/user']);
    }
  }

  export class TeamChampionship {
    constructor(
      public teamid:string,
      public championshipid:string,
    ){}
  }