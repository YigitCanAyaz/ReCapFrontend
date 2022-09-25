import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { CarDetailMenuComponent } from './components/car-detail-menu/car-detail-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarDetailMenuComponent },
  { path: 'cars', component: CarDetailMenuComponent },
  { path: 'cars/car-detail-page/:carId', component: CarDetailPageComponent },
  { path: 'cars/brand/:brandId', component: CarDetailMenuComponent },
  { path: 'cars/color/:colorId', component: CarDetailMenuComponent },
  { path: 'cars/filter/brandId/:brandId/colorId/:colorId/minDailyPrice/:minDailyPrice/maxDailyPrice/:maxDailyPrice', component: CarDetailMenuComponent },
  { path: 'cars/filter/colorId=:colorId/minDailyPrice=:minDailyPrice/maxDailyPrice=:maxDailyPrice', component: CarDetailMenuComponent },
  { path: 'cars/filter/minDailyPrice=:minDailyPrice/maxDailyPrice=:maxDailyPrice', component: CarDetailMenuComponent },
  { path: 'maxDailyPrice=:maxDailyPrice', component: CarDetailMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
