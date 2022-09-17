import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from 'src/app/models/details/rentalDetail';
import { Rental } from 'src/app/models/entities/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { IRentalService } from '../abstract/iRentalService';

@Injectable({
  providedIn: 'root'
})

export class RentalService implements IRentalService {

  baseUrl: string = 'https://localhost:44343/api/rentals/';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<Rental>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Rental>>(path);
  }

  getRentalDetailsById(id: number): Observable<SingleResponseModel<RentalDetail>> {
    const path = this.baseUrl + "getrentaldetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<RentalDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<Rental>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Rental>>(path);
  }

  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>> {
    const path = this.baseUrl + 'getallrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(path);
  }

}