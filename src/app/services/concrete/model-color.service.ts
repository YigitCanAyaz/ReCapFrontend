import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelColor } from 'src/app/models/entities/modelColor';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { IModelColorService } from '../abstract/iModelColorService';

@Injectable({
  providedIn: 'root'
})
export class ModelColorService implements IModelColorService {

  baseUrl: string = 'https://localhost:44343/api/modelColors/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<ModelColor>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<ModelColor>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<ModelColor>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<ModelColor>>(path);
  }

  add(modelColor: ModelColor): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", modelColor);
  }

}
