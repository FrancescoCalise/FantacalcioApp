import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';


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
  component: UserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
