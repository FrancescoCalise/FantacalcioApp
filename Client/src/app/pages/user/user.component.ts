import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Player } from 'src/app/services/model/player';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  player:Player[]
  
  constructor(private service: ApiService,) { 
    service.allPlayers().subscribe(
      (data: Player[]) => {
        this.player = data;
        console.log(this.player)
      },
      (err) => { 
        //todo error
       }
    );
    return;
  }

  ngOnInit() {
    console.log()
  }

}
