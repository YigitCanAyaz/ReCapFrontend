import { Observable } from "rxjs";
import { Color } from "src/app/models/entities/color";
import { ListResponseModel } from "src/app/models/listResponseModel";

export interface IColorService {
  getAll(): Observable<ListResponseModel<Color>>;
}
