import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/entities/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { IBrandService } from '../abstract/iBrandService';
@Injectable({
  providedIn: 'root'
})
export class BrandService implements IBrandService {

  baseUrl: string = 'https://localhost:44343/api/brands/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Brand>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Brand>> {
    const path = this.baseUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Brand>>(path);
  }

  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", brand);
  }

  update(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", brand);
  }
}
