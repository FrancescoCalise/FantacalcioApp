import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player, addPlayer } from 'src/app/services/model/player';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/services/model/team';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  player:Player[]
  
  constructor(private service: ApiService,private modalService: NgbModal) { 
   
  }

  ngOnInit() {
    
  }

  openAddPlayerInTeamModal() {
    this.modalService.open(addPlayerInTeamModal, {
      size: 'lg'
    });
  }
}

@Component({
  selector: 'app-user-1',
  templateUrl: './modals/addPlayerInTeam.html',
  styleUrls: ['./user.component.css']
})
  export class addPlayerInTeamModal {

    model = new addPlayer(null,null,null);
    players: Player[];
    teams :Team[];
  
    constructor(public activeModal: NgbActiveModal,private service: ApiService,private toastr: ToastrService) {
      this.players = JSON.parse(localStorage.getItem("Player"))
      this.service.allTeam().subscribe(
        (data)=>{
          this.teams= data;
      },
      (err) => {
        this.toastr.error(err.message,'Errore');
      })
     
    }
    
    save(id,soldValue,TeamFantaId){
      this.service.addPlayerInTeam(id,soldValue,TeamFantaId).subscribe(
        (data) => {
          this.toastr.success(data,'Giocatore salvato con successo');
          this.activeModal.close('Close click');
        },
        (err) => {
          this.toastr.error(err.message,'Errore');
         }
      );
      return;
    }
    
  }
