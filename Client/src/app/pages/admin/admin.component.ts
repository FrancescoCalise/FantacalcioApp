import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/services/model/player';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChampionshipClass } from 'src/app/services/model/championship';

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

  open() {
    this.modalService.open(addChampionship, {
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


  constructor(public activeModal: NgbActiveModal,private service: ApiService) {
  }
  
  save(name,anno){
    this.service.addChampionship(name,anno).subscribe(
      (data) => {
      debugger
      },
      (err) => { 
        debugger
        //todo error
       }
    );
    return;
  }
  
}
