import { SiteLayoutComponent } from './components/site/site-layout/site-layout.component';
import { LoginComponent } from './components/login/login.component';
import { CarDetailPageComponent } from './components/site/car-detail-page/car-detail-page.component';
import { CarDetailMenuComponent } from './components/site/car-detail-menu/car-detail-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: "", pathMatch: "full", component: CarDetailMenuComponent },
      { path: 'cars', component: CarDetailMenuComponent },
      { path: 'cars/car-detail-page/:carId', component: CarDetailPageComponent },
      { path: 'cars/brand/:brandId', component: CarDetailMenuComponent },
      { path: 'cars/color/:colorId', component: CarDetailMenuComponent },
      { path: 'cars/filter/brandId/:brandId/colorId/:colorId/minDailyPrice/:minDailyPrice/maxDailyPrice/:maxDailyPrice', component: CarDetailMenuComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
