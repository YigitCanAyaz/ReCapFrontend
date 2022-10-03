import { ICarImageService } from './../abstract/iCarImageService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageDetail } from 'src/app/models/details/carImageDetail';
import { CarImage } from 'src/app/models/entities/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService implements ICarImageService {

  baseUrl: string = 'https://localhost:44343/api/carimages/';
  imageUrl = "https://localhost:44343";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<CarImage>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<CarImage>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<CarImage>>(path);
  }

  add(carImage: CarImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", carImage);
  }

  update(carImage: CarImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", carImage);
  }

  getCarImageDetailsById(id: number): Observable<SingleResponseModel<CarImageDetail>> {
    const path = this.baseUrl + "getcarimagedetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<CarImageDetail>>(path);
  }

  getAllCarImageDetails(): Observable<ListResponseModel<CarImageDetail>> {
    const path = this.baseUrl + 'getallcarimagedetails';
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(path);
  }

  getCarImage(carImageDetail: CarImageDetail): string {
    if (carImageDetail.imagePath.length === 0) {
      const path = this.imageUrl + "/Images/default.png";
      return path;
    }
    else {
      const path = this.imageUrl + carImageDetail.imagePath;
      return path;
    }
  }
}
