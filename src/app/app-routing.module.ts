import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageFirstCreatComponent } from './view/home/home-page-first-creat/home-page-first-creat.component';
import { HomePageSecondCreatComponent } from './view/home/home-page-second-creat/home-page-second-creat.component';
import { ServiceComponent } from './Shared/Service/service.component';
import { ServiceMedicalComponent } from './Views/service-medical/service-medical.component';
import { FormCardComponent } from './component/form-card/form-card.component';
import { GestionCustComponent } from './SuperAdmin/gestion-cust/gestion-cust.component';
import { GestionDocComponent } from './SuperAdmin/gestion-doc/gestion-doc.component';
import { DashboardSuperAddComponent } from './SuperAdmin/dashboard-super-add/dashboard-super-add.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home-page-first', pathMatch: 'full' }, // Page par défaut
  {path:'Login',component:FormCardComponent},//login path
  {path:'home-page-first', component: HomePageFirstCreatComponent },
  {path:'home-page-second', component: HomePageSecondCreatComponent },
  {path:'service',component:ServiceMedicalComponent},
  {path:'services', component:ServiceComponent},
  {path:'gestion-cust', component:GestionCustComponent},
  {path:'gestion-doc', component:GestionDocComponent},
  {path:'dashboard-super-add', component:DashboardSuperAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
