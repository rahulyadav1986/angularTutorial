import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./components/users/users.module').then(m=>m.UsersModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=>import('./components/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'**',
    component: NotfoundComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
