import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service: ApiService,private toastr: ToastrService) {

  }

  ngOnInit() {
  }
  cleanStorage(){
    localStorage.clear();
    this.toastr.success('Ok', 'Logout Effettuato');
  }
}
