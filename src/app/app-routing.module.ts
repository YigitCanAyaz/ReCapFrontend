import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginGuard } from './guards/login.guard';
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
import { BrandViewComponent } from './components/admin/brand/brand-view/brand-view.component';
import { CarViewComponent } from './components/admin/car/car-view/car-view.component';
import { ColorViewComponent } from './components/admin/color/color-view/color-view.component';
import { CustomerViewComponent } from './components/admin/customer/customer-view/customer-view.component';
import { ModelViewComponent } from './components/admin/model/model-view/model-view.component';
import { RentalViewComponent } from './components/admin/rental/rental-view/rental-view.component';
import { BrandAddComponent } from './components/admin/brand/brand-add/brand-add.component';
import { CarAddComponent } from './components/admin/car/car-add/car-add.component';
import { ColorAddComponent } from './components/admin/color/color-add/color-add.component';
import { CustomerAddComponent } from './components/admin/customer/customer-add/customer-add.component';
import { ModelAddComponent } from './components/admin/model/model-add/model-add.component';
import { RentalAddComponent } from './components/admin/rental/rental-add/rental-add.component';
import { BrandUpdateComponent } from './components/admin/brand/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/admin/car/car-update/car-update.component';
import { ColorUpdateComponent } from './components/admin/color/color-update/color-update.component';
import { CustomerUpdateComponent } from './components/admin/customer/customer-update/customer-update.component';
import { ModelUpdateComponent } from './components/admin/model/model-update/model-update.component';
import { RentalUpdateComponent } from './components/admin/rental/rental-update/rental-update.component';
import { BrandRemoveComponent } from './components/admin/brand/brand-remove/brand-remove.component';
import { CarRemoveComponent } from './components/admin/car/car-remove/car-remove.component';
import { ColorRemoveComponent } from './components/admin/color/color-remove/color-remove.component';
import { CustomerRemoveComponent } from './components/admin/customer/customer-remove/customer-remove.component';
import { ModelRemoveComponent } from './components/admin/model/model-remove/model-remove.component';
import { RentalRemoveComponent } from './components/admin/rental/rental-remove/rental-remove.component';
import { ModelColorListComponent } from './components/admin/modelColor/model-color-list/model-color-list.component';
import { ModelColorAddComponent } from './components/admin/modelColor/model-color-add/model-color-add.component';

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
    canActivate: [LoginGuard],
    children: [

      { path: "", pathMatch: "full", component: AdminDashboardComponent },

      { path: "brands/list", component: BrandListComponent },
      { path: "cars/list", component: CarListComponent },
      { path: "colors/list", component: ColorListComponent },
      { path: "customers/list", component: CustomerListComponent },
      { path: "models/list", component: ModelListComponent },
      { path: "rentals/list", component: RentalListComponent },
      { path: "modelcolors/list", component: ModelColorListComponent },

      { path: "brands/view/:brandId", component: BrandViewComponent },
      { path: "cars/view/:carId", component: CarViewComponent },
      { path: "colors/view/:colorId", component: ColorViewComponent },
      { path: "customers/view/:customerId", component: CustomerViewComponent },
      { path: "models/view/:modelId", component: ModelViewComponent },
      { path: "rentals/view/:rentalId", component: RentalViewComponent },

      { path: "brands/add", component: BrandAddComponent },
      { path: "cars/add", component: CarAddComponent },
      { path: "colors/add", component: ColorAddComponent },
      { path: "customers/add", component: CustomerAddComponent },
      { path: "models/add", component: ModelAddComponent },
      { path: "modelcolors/add", component: ModelColorAddComponent },
      { path: "rentals/add", component: RentalAddComponent },

      { path: "brands/update/:brandId", component: BrandUpdateComponent },
      { path: "cars/update/:carId", component: CarUpdateComponent },
      { path: "colors/update/:colorId", component: ColorUpdateComponent },
      { path: "customers/update/:customerId", component: CustomerUpdateComponent },
      { path: "models/update/:modelId", component: ModelUpdateComponent },
      { path: "rentals/update/:rentalId", component: RentalUpdateComponent },

      { path: "brands/remove/:brandId", component: BrandRemoveComponent },
      { path: "cars/remove/:carId", component: CarRemoveComponent },
      { path: "colors/remove/:colorId", component: ColorRemoveComponent },
      { path: "customers/remove/:customerId", component: CustomerRemoveComponent },
      { path: "models/remove/:modelId", component: ModelRemoveComponent },
      { path: "rentals/remove/:rentalId", component: RentalRemoveComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
