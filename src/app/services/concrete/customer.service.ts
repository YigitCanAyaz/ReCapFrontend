import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetail } from 'src/app/models/details/customerDetail';
import { Customer } from 'src/app/models/entities/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ICustomerService } from '../abstract/iCustomerService';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService {

  baseUrl: string = 'https://localhost:44343/api/customers/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.baseUrl + 'getall');
  }

  getAllCustomerDetails(): Observable<ListResponseModel<CustomerDetail>> {
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(this.baseUrl + 'getallcustomerdetails');
  }

}
