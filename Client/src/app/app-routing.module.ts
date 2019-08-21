import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { AddChampAndTeamGuard } from './guard/add-champ-and-team.guard';
import { AddTeamAndChampionshipComponent } from './pages/addTeamAndChampionship/addTeamAndChampionship.component';
import { MyTeamComponent } from './pages/myTeam/myTeam.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AddChampAndTeamGuard],
  },
  {
    path: 'selectTeamAndChampionship',
    component: AddTeamAndChampionshipComponent,
  },
  {
    path: 'myTeam',
    component: MyTeamComponent,
    canActivate: [AddChampAndTeamGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
