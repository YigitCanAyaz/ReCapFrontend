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
import { ColorAddComponent } from './components/admin/color/color-add/color-add.component';
import { ColorViewComponent } from './components/admin/color/color-view/color-view.component';
import { ColorRemoveComponent } from './components/admin/color/color-remove/color-remove.component';
import { ColorUpdateComponent } from './components/admin/color/color-update/color-update.component';
import { CustomerAddComponent } from './components/admin/customer/customer-add/customer-add.component';
import { CustomerViewComponent } from './components/admin/customer/customer-view/customer-view.component';
import { CustomerRemoveComponent } from './components/admin/customer/customer-remove/customer-remove.component';
import { CustomerUpdateComponent } from './components/admin/customer/customer-update/customer-update.component';
import { ModelAddComponent } from './components/admin/model/model-add/model-add.component';
import { ModelViewComponent } from './components/admin/model/model-view/model-view.component';
import { ModelRemoveComponent } from './components/admin/model/model-remove/model-remove.component';
import { ModelUpdateComponent } from './components/admin/model/model-update/model-update.component';
import { RentalAddComponent } from './components/admin/rental/rental-add/rental-add.component';
import { RentalUpdateComponent } from './components/admin/rental/rental-update/rental-update.component';
import { RentalViewComponent } from './components/admin/rental/rental-view/rental-view.component';
import { RentalRemoveComponent } from './components/admin/rental/rental-remove/rental-remove.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CustomerDetailFirstNameFilterPipePipe } from './pipes/customer-detail-first-name-filter-pipe.pipe';
import { ModelDetailFilterPipePipe } from './pipes/model-detail-filter-pipe.pipe';
import { RentalDetailFirstNameFilterPipePipe } from './pipes/rental-detail-first-name-filter-pipe.pipe';
import { ModelColorAddComponent } from './components/admin/modelColor/model-color-add/model-color-add.component';
import { ModelColorListComponent } from './components/admin/modelColor/model-color-list/model-color-list.component';
import { ModelColorViewComponent } from './components/admin/modelColor/model-color-view/model-color-view.component';
import { ModelColorUpdateComponent } from './components/admin/modelColor/model-color-update/model-color-update.component';
import { ModelColorRemoveComponent } from './components/admin/modelColor/model-color-remove/model-color-remove.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ModelColorDetailFilterPipePipe } from './pipes/model-color-detail-filter-pipe.pipe';
import { CarDetailDescriptionFilterPipePipe } from './pipes/car-detail-description-filter-pipe.pipe';
import { UserListComponent } from './components/admin/user/user-list/user-list.component';
import { UserFilterPipePipe } from './pipes/user-filter-pipe.pipe';
import { UserAddComponent } from './components/admin/user/user-add/user-add.component';
import { UserViewComponent } from './components/admin/user/user-view/user-view.component';
import { UserRemoveComponent } from './components/admin/user/user-remove/user-remove.component';
import { UserUpdateComponent } from './components/admin/user/user-update/user-update.component';
import { UserLastNameFilterPipePipe } from './pipes/user-last-name-filter-pipe.pipe';
import { CarImageAddComponent } from './components/admin/carImage/car-image-add/car-image-add.component';
import { CarImageViewComponent } from './components/admin/carImage/car-image-view/car-image-view.component';
import { CarImageListComponent } from './components/admin/carImage/car-image-list/car-image-list.component';
import { CarImageRemoveComponent } from './components/admin/carImage/car-image-remove/car-image-remove.component';
import { CarImageUpdateComponent } from './components/admin/carImage/car-image-update/car-image-update.component';
import { UserOperationClaimAddComponent } from './components/admin/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimRemoveComponent } from './components/admin/user-operation-claim/user-operation-claim-remove/user-operation-claim-remove.component';
import { UserOperationClaimViewComponent } from './components/admin/user-operation-claim/user-operation-claim-view/user-operation-claim-view.component';
import { UserOperationClaimListComponent } from './components/admin/user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimUpdateComponent } from './components/admin/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { OperationClaimAddComponent } from './components/admin/operation-claim/operation-claim-add/operation-claim-add.component';
import { OperationClaimRemoveComponent } from './components/admin/operation-claim/operation-claim-remove/operation-claim-remove.component';
import { OperationClaimUpdateComponent } from './components/admin/operation-claim/operation-claim-update/operation-claim-update.component';
import { OperationClaimViewComponent } from './components/admin/operation-claim/operation-claim-view/operation-claim-view.component';
import { OperationClaimListComponent } from './components/admin/operation-claim/operation-claim-list/operation-claim-list.component';
import { OperationClaimFilterPipePipe } from './pipes/operation-claim-filter-pipe.pipe';
import { UserOperationClaimDetailFilterPipePipe } from './pipes/user-operation-claim-detail-filter-pipe.pipe';
import { HomeLayoutComponent } from './components/home/home-layout/home-layout.component';
import { LastRentalListComponent } from './components/home/last-rental-list/last-rental-list.component';
import { HideFirstNamePipePipe } from './pipes/hide-first-name-pipe.pipe';
import { HideLastNamePipePipe } from './pipes/hide-last-name-pipe.pipe';
import { CardItemsComponent } from './components/home/card-items/card-items.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


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
    CarViewComponent,
    ColorAddComponent,
    ColorViewComponent,
    ColorRemoveComponent,
    ColorUpdateComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    CustomerRemoveComponent,
    CustomerUpdateComponent,
    ModelAddComponent,
    ModelViewComponent,
    ModelRemoveComponent,
    ModelUpdateComponent,
    RentalAddComponent,
    RentalUpdateComponent,
    RentalViewComponent,
    RentalRemoveComponent,
    AdminDashboardComponent,
    CustomerDetailFirstNameFilterPipePipe,
    ModelDetailFilterPipePipe,
    RentalDetailFirstNameFilterPipePipe,
    ModelColorAddComponent,
    ModelColorListComponent,
    ModelColorViewComponent,
    ModelColorUpdateComponent,
    ModelColorRemoveComponent,
    ModelColorDetailFilterPipePipe,
    CarDetailDescriptionFilterPipePipe,
    UserListComponent,
    UserFilterPipePipe,
    UserAddComponent,
    UserViewComponent,
    UserRemoveComponent,
    UserUpdateComponent,
    UserLastNameFilterPipePipe,
    CarImageAddComponent,
    CarImageViewComponent,
    CarImageListComponent,
    CarImageRemoveComponent,
    CarImageUpdateComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimRemoveComponent,
    UserOperationClaimViewComponent,
    UserOperationClaimListComponent,
    UserOperationClaimUpdateComponent,
    OperationClaimAddComponent,
    OperationClaimRemoveComponent,
    OperationClaimUpdateComponent,
    OperationClaimViewComponent,
    OperationClaimListComponent,
    OperationClaimFilterPipePipe,
    UserOperationClaimDetailFilterPipePipe,
    HomeLayoutComponent,
    LastRentalListComponent,
    HideFirstNamePipePipe,
    HideLastNamePipePipe,
    CardItemsComponent,
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
    }),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
