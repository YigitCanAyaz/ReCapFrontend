import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelDetail } from 'src/app/models/details/modelDetail';
import { Model } from 'src/app/models/entities/model';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { IModelService } from '../abstract/iModelService';

@Injectable({
  providedIn: 'root'
})
export class ModelService implements IModelService {

  baseUrl: string = 'https://localhost:44343/api/models/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Model>> {
    return this.httpClient.get<ListResponseModel<Model>>(this.baseUrl + 'getall');
  }

  getAllModelDetails(): Observable<ListResponseModel<ModelDetail>> {
    return this.httpClient.get<ListResponseModel<ModelDetail>>(this.baseUrl + 'getallmodeldetails');
  }

}
