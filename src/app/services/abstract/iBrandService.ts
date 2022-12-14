import { Brand } from './../../models/entities/brand';
import { Observable } from "rxjs";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";
import { ResponseModel } from 'src/app/models/responseModel';

export interface IBrandService {

  getById(id: number): Observable<SingleResponseModel<Brand>>;
  getAll(): Observable<ListResponseModel<Brand>>;
  getAllBrandLength(): Observable<SingleResponseModel<number>>;
  add(brand: Brand): Observable<ResponseModel>;
  update(brand: Brand): Observable<ResponseModel>;
  delete(brand: Brand): Observable<ResponseModel>;
}
