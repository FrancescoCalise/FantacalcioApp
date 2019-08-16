import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent, addChampionship, addTeam } from './pages/admin/admin.component';
import { UserComponent, addPlayerInTeamModal } from './pages/user/user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminComponent,
    UserComponent,
    addChampionship,
    addTeam,
    addPlayerInTeamModal
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-full-width'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [addChampionship,addTeam,addPlayerInTeamModal]
})
export class AppModule { }
