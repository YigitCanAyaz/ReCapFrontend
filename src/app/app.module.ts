import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/site/brand/brand.component';
import { CarComponent } from './components/site/car/car.component';
import { ColorComponent } from './components/site/color/color.component';
import { CustomerComponent } from './components/site/customer/customer.component';
import { ModelComponent } from './components/site/model/model.component';
import { RentalComponent } from './components/site/rental/rental.component';
import { CarDetailMenuComponent } from './components/site/car-detail-menu/car-detail-menu.component';
import { CarDetailPageComponent } from './components/site/car-detail-page/car-detail-page.component';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { CarDetailModelFilterPipePipe } from './pipes/car-detail-model-filter-pipe.pipe';
import { CarDetailFilterComponent } from './components/site/car-detail-filter/car-detail-filter.component';

import { ToastrModule } from 'ngx-toastr';
import { RentalDetailHistoryComponent } from './components/site/rental-detail-history/rental-detail-history.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SiteLayoutComponent } from './components/site/site-layout/site-layout.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { CarListComponent } from './components/admin/car/car-list/car-list.component';
import { BrandListComponent } from './components/admin/brand/brand-list/brand-list.component';
import { ColorListComponent } from './components/admin/color/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/customer/customer-list/customer-list.component';
import { ModelListComponent } from './components/admin/model/model-list/model-list.component';
import { RentalListComponent } from './components/admin/rental/rental-list/rental-list.component';
import { BrandAddComponent } from './components/admin/brand/brand-add/brand-add.component';
import { BrandViewComponent } from './components/admin/brand/brand-view/brand-view.component';
import { BrandUpdateComponent } from './components/admin/brand/brand-update/brand-update.component';
import { BrandRemoveComponent } from './components/admin/brand/brand-remove/brand-remove.component';
import { CarAddComponent } from './components/admin/car/car-add/car-add.component';
import { CarRemoveComponent } from './components/admin/car/car-remove/car-remove.component';
import { CarUpdateComponent } from './components/admin/car/car-update/car-update.component';
import { CarViewComponent } from './components/admin/car/car-view/car-view.component';

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
    RentalDetailHistoryComponent,
    LoginComponent,
    RegisterComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    CarListComponent,
    BrandListComponent,
    ColorListComponent,
    CustomerListComponent,
    ModelListComponent,
    RentalListComponent,
    BrandAddComponent,
    BrandViewComponent,
    BrandUpdateComponent,
    BrandRemoveComponent,
    CarAddComponent,
    CarRemoveComponent,
    CarUpdateComponent,
    CarViewComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
