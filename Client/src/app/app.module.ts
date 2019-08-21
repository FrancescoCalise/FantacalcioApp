import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent, } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AddChampAndTeamGuard } from './guard/add-champ-and-team.guard';
import { AddTeamAndChampionshipComponent } from './pages/addTeamAndChampionship/addTeamAndChampionship.component';
import { AddPortiereInTeamModalComponent } from './pages/user/modals/AddPortiereInTeamModal';
import { AddDifensoreInTeamModalComponent } from './pages/user/modals/AddDifensoreInTeamModal';
import { AddAttaccanteInTeamModalComponent } from './pages/user/modals/AddAttaccanteInTeamModal';
import { AddCentrocampistaInTeamModalComponent } from './pages/user/modals/AddCentrocampistaInTeamModal';
import { ShowBudgetModalComponent } from './pages/user/modals/ShowBudgetModalComponent';
import { MyTeamComponent } from './pages/myTeam/myTeam.component';
import { AddChampionship } from './pages/admin/AddChampionship';
import { AddTeam } from './pages/admin/AddTeam';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminComponent,
    UserComponent,
    MyTeamComponent,
    AddChampionship,
    AddTeam,
    AddPortiereInTeamModalComponent,
    AddCentrocampistaInTeamModalComponent,
    AddAttaccanteInTeamModalComponent,
    AddDifensoreInTeamModalComponent,
    AddTeamAndChampionshipComponent,
    ShowBudgetModalComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-full-width' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    ApiService,
    AddChampAndTeamGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddChampionship,
    AddTeam,
    AddPortiereInTeamModalComponent,
    AddCentrocampistaInTeamModalComponent,
    AddAttaccanteInTeamModalComponent,
    AddDifensoreInTeamModalComponent,
    ShowBudgetModalComponent
  ]
})
export class AppModule { }
