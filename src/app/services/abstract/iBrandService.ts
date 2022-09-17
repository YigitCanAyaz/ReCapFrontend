import { Brand } from './../../models/entities/brand';
import { Observable } from "rxjs";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IBrandService {

  getById(id: number): Observable<SingleResponseModel<Brand>>;
  getAll(): Observable<ListResponseModel<Brand>>;
}
