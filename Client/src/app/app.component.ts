import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Player } from './services/model/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FantacalcioTeam';
  public Player : Player[]
  
  constructor(private service: ApiService) { 
    
    this.service.allPlayers().subscribe(
      (data: Player[]) => {
        this.Player = data;
      },
      (err) => { 
        //TODO : ERRORE
       }
    );
    return;
  }

}
