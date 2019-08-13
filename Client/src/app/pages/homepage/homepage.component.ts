import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/services/model/player';
import { MatCard }from '@angular/material';
 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  Player: Player[]
  constructor(private service: ApiService) { 
    
  }

  ngOnInit() {
  }

  goToAdmin= function () {
    this.router('admin');
  };  
  goToUser= function () {
    this.router.navigateByUrl('user');
  };  
}
