import { HttpClient } from '@angular/common/http';
import { ICarService } from './../abstract/iCarService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/details/carDetail';
import { Car } from 'src/app/models/entities/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService implements ICarService {


  baseUrl: string = 'https://localhost:44343/api/cars/';
  imageUrl = "https://localhost:44343";

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

  getAllCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    const path = this.baseUrl + "getallcardetailsbybrandid?brandid=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getAllCarDetailsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
    const path = this.baseUrl + "getallcardetailsbycolorid?colorid=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId: number, colorId: number, minDailyPrice: number, maxDailyPrice: number): Observable<ListResponseModel<CarDetail>> {

    const path = this.baseUrl + "getallcardetailsbybrandidcoloridmindailypricemaxdailyprice?" + "brandid=" + brandId + "&colorid=" + colorId + "&mindailyprice=" + minDailyPrice + "&maxdailyprice=" + maxDailyPrice;

    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarImage(carDetail: CarDetail): string {
    if (carDetail.imagePath.length === 0) {
      const path = this.imageUrl + "/Images/default.png";
      return path;
    }
    else {
      const path = this.imageUrl + carDetail.imagePath[0];
      return path;
    }
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", car);
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", car);
  }

  delete(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", car);
  }


}
