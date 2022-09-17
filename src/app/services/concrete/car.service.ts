import { HttpClient } from '@angular/common/http';
import { ICarService } from './../abstract/iCarService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/details/carDetail';
import { Car } from 'src/app/models/entities/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService implements ICarService {

  baseUrl: string = 'https://localhost:44343/api/cars/';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<Car>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Car>>(path);
  }

  getCarsByModelId(modelId: number): Observable<ListResponseModel<Car>> {
    const path = this.baseUrl + "getcarsbymodelid?modelId=" + modelId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    const path = this.baseUrl + "getcarsbycolorid?modelId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarDetailsById(id: number): Observable<SingleResponseModel<CarDetail>> {
    const path = this.baseUrl + "getcardetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<Car>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getAllCarDetails(): Observable<ListResponseModel<CarDetail>> {
    const path = this.baseUrl + "getallcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

}