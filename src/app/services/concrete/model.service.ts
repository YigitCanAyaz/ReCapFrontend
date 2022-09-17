import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelDetail } from 'src/app/models/details/modelDetail';
import { Model } from 'src/app/models/entities/model';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { IModelService } from '../abstract/iModelService';

@Injectable({
  providedIn: 'root'
})
export class ModelService implements IModelService {

  baseUrl: string = 'https://localhost:44343/api/models/';

  constructor(private httpClient: HttpClient) { }
  getById(id: number): Observable<SingleResponseModel<Model>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Model>>(path);
  }

  getModelDetailsById(id: number): Observable<SingleResponseModel<ModelDetail>> {
    const path = this.baseUrl + "getmodeldetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<ModelDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<Model>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Model>>(path);
  }

  getAllModelDetails(): Observable<ListResponseModel<ModelDetail>> {
    const path = this.baseUrl + 'getallmodeldetails';
    return this.httpClient.get<ListResponseModel<ModelDetail>>(path);
  }

}
