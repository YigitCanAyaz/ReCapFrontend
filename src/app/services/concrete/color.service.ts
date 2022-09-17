import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/entities/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { IColorService } from '../abstract/iColorService';

@Injectable({
  providedIn: 'root'
})
export class ColorService implements IColorService {

  baseUrl: string = 'https://localhost:44343/api/colors/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Color>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<Color>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Color>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Color>>(path);
  }

}
