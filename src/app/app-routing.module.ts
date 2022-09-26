import { SiteLayoutComponent } from './components/site/site-layout/site-layout.component';
import { LoginComponent } from './components/login/login.component';
import { CarDetailPageComponent } from './components/site/car-detail-page/car-detail-page.component';
import { CarDetailMenuComponent } from './components/site/car-detail-menu/car-detail-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { BrandListComponent } from './components/admin/brand/brand-list/brand-list.component';
import { CarListComponent } from './components/admin/car/car-list/car-list.component';
import { ColorListComponent } from './components/admin/color/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/customer/customer-list/customer-list.component';
import { ModelListComponent } from './components/admin/model/model-list/model-list.component';
import { RentalListComponent } from './components/admin/rental/rental-list/rental-list.component';

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
      { path: "brands/list", component: BrandListComponent },
      { path: "cars/list", component: CarListComponent },
      { path: "colors/list", component: ColorListComponent },
      { path: "customers/list", component: CustomerListComponent },
      { path: "models/list", component: ModelListComponent },
      { path: "rentals/list", component: RentalListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
