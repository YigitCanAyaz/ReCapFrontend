import { HttpClient } from '@angular/common/http';
import { ICarService } from './../abstract/iCarService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/details/carDetail';
import { Car } from 'src/app/models/entities/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService implements ICarService {

  baseUrl: string = 'https://localhost:44343/api/cars/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.baseUrl + 'getall');
  }

  getAllCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.baseUrl + 'getallcardetails');
  }

}
