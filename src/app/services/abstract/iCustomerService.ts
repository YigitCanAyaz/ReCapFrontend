import { SingleResponseModel } from './../../models/singleResponseModel';
import { Observable } from "rxjs";
import { CustomerDetail } from "src/app/models/details/customerDetail";
import { Customer } from "src/app/models/entities/customer";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from 'src/app/models/responseModel';

export interface ICustomerService {
  getAll(): Observable<ListResponseModel<Customer>>;
  getById(id: number): Observable<SingleResponseModel<Customer>>;
  getAllCustomerDetails(): Observable<ListResponseModel<CustomerDetail>>;
  getCustomerDetailsById(id: number): Observable<SingleResponseModel<CustomerDetail>>;
  add(customer: Customer): Observable<ResponseModel>;
}
