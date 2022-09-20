import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ModelComponent } from './components/model/model.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailMenuComponent } from './components/car-detail-menu/car-detail-menu.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { CarDetailModelFilterComponent } from './components/car-detail-model-filter/car-detail-model-filter.component';
import { CarDetailModelFilterPipePipe } from './pipes/car-detail-model-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    ModelComponent,
    RentalComponent,
    CarDetailMenuComponent,
    CarDetailPageComponent,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarDetailModelFilterComponent,
    CarDetailModelFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
