import { Observable } from "rxjs";
import { Color } from "src/app/models/entities/color";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IColorService {
  getAll(): Observable<ListResponseModel<Color>>;
  getById(id: number): Observable<SingleResponseModel<Color>>;
}
