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

  getById(id: number): Observable<SingleResponseModel<Brand>> {
    // return this.httpClient.get<SingleResponseModel<Brand>>(this.baseUrl + 'getbyid?id=' + id);
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.baseUrl + 'getall');
  }

  add(brand: Brand): Observable<ResponseModel> {
    throw new Error('Method not implemented.');
  }

  update(brand: Brand): Observable<ResponseModel> {
    throw new Error('Method not implemented.');
  }

  delete(brand: Brand): Observable<ResponseModel> {
    throw new Error('Method not implemented.');
  }

}
