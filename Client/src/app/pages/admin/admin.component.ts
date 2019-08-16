import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/services/model/player';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChampionshipClass,Championship } from 'src/app/services/model/championship';
import { ToastrService} from 'ngx-toastr';
import { TeamClass } from 'src/app/services/model/team';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  Player: Player[]
  constructor(private service: ApiService,private modalService: NgbModal) { 
    
  }

  ngOnInit() {
  }

  openAddChampshipModal() {
    this.modalService.open(addChampionship, {
      size: 'lg'
    });
  }
  openAddTeamModal() {
    this.modalService.open(addTeam, {
      size: 'lg'
    });
  }

}

@Component({
  selector: 'app-admin-1',
  templateUrl: './modals/addChampionship.html',
  styleUrls: ['./admin.component.css']
})

export class addChampionship {

  model = new ChampionshipClass(null,null);


  constructor(public activeModal: NgbActiveModal,private service: ApiService,private toastr: ToastrService) {
  }
  
  save(name,anno){
    this.service.addChampionship(name,anno).subscribe(
      (data) => {
        this.toastr.success(data,'OK');
      },
      (err) => {
        this.toastr.error(err.message,'Errore');
       }
    );
    return;
  }
  
}

@Component({
  selector: 'app-admin-1',
  templateUrl: './modals/addTeam.html',
  styleUrls: ['./admin.component.css']
})

export class addTeam {

  model = new TeamClass(null,null,null);
  allchampionships : Championship[]

  constructor(public activeModal: NgbActiveModal,private service: ApiService,private toastr: ToastrService) {
    this.service.allChampionship().subscribe(
      (data)=>{
        this.allchampionships =data;
    },
    (err) => {
      this.toastr.error(err.message,'Errore');
    }

    )
  }
  
  save(name,user,championshipName){
    
    let champ = this.allchampionships.find(f => f.name == championshipName)

    this.service.addTeam(name,user,champ.id).subscribe(
      (data) => {
        this.toastr.success(data,'OK');
      },
      (err) => {
        this.toastr.error(err.message,'Errore');
       }
    );
    return;
  }
  
}
