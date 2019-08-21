import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AddChampAndTeamGuard implements CanActivate  {
  constructor(
    private route: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('ChampionshipId') == null || localStorage.getItem('FantaTeamId') == null) {
        this.route.navigate(['/selectTeamAndChampionship']);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }

}
