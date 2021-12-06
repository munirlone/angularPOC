import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlTemplateComponent } from './Components/control-template/control-template.component';
import { UsersComponent } from './Components/users/users.component';
import { WellListComponent } from './Components/well-list/well-list.component';


const routes: Routes = [
  {
    path: "users", component: UsersComponent
  },
  {
    path: "well/:mode", component: WellListComponent
  },
  {
    path: "controls", component: ControlTemplateComponent
  },

  { path: '', redirectTo: '/users', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
