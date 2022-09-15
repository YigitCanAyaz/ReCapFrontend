import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from 'src/app/models/details/rentalDetail';
import { Rental } from 'src/app/models/entities/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { IRentalService } from '../abstract/iRentalService';

@Injectable({
  providedIn: 'root'
})

export class RentalService implements IRentalService {

  baseUrl: string = 'https://localhost:44343/api/rentals/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.baseUrl + 'getall');
  }

  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.baseUrl + 'getallrentaldetails');
  }

}
