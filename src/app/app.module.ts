import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { CarDetailModelFilterPipePipe } from './pipes/car-detail-model-filter-pipe.pipe';
import { CarDetailFilterComponent } from './components/car-detail-filter/car-detail-filter.component';

import { ToastrModule } from 'ngx-toastr';

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
    CarDetailModelFilterPipePipe,
    CarDetailFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
