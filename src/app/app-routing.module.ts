import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { CarDetailMenuComponent } from './components/car-detail-menu/car-detail-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarDetailMenuComponent },
  { path: 'cars', component: CarDetailMenuComponent },
  { path: 'cars/car-detail-page/:id', component: CarDetailPageComponent },
  { path: 'cars/brand/:brandId', component: CarDetailMenuComponent },
  { path: 'cars/color/:colorId', component: CarDetailMenuComponent },
  { path: 'cars/filter/:brandId/:colorId', component: CarDetailMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
