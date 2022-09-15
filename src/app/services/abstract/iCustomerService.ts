import { Observable } from "rxjs";
import { CustomerDetail } from "src/app/models/details/customerDetail";
import { Customer } from "src/app/models/entities/customer";
import { ListResponseModel } from "src/app/models/listResponseModel";

export interface ICustomerService {
  getAll(): Observable<ListResponseModel<Customer>>;
  getAllCustomerDetails(): Observable<ListResponseModel<CustomerDetail>>;
}
