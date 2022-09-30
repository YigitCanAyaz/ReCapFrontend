import { Observable } from "rxjs";
import { Color } from "src/app/models/entities/color";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IColorService {
  getAll(): Observable<ListResponseModel<Color>>;
  getById(id: number): Observable<SingleResponseModel<Color>>;
  add(color: Color): Observable<ResponseModel>;
}
