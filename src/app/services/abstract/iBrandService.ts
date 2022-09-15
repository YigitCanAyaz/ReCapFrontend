import { Brand } from './../../models/entities/brand';
import { Observable } from "rxjs";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IBrandService {
  GetById(id: number): Observable<SingleResponseModel<Brand>>;
  GetAll(): Observable<ListResponseModel<Brand>>
  Add(brand: Brand): Observable<ResponseModel>
  Update(brand: Brand): Observable<ResponseModel>
  Delete(brand: Brand): Observable<ResponseModel>
}
