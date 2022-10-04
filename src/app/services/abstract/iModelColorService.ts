import { Observable } from "rxjs";
import { ModelColorDetail } from "src/app/models/details/modelColorDetail";
import { ModelColor } from "src/app/models/entities/modelColor";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IModelColorService {
  getAll(): Observable<ListResponseModel<ModelColor>>;
  getById(id: number): Observable<SingleResponseModel<ModelColor>>;
  add(modelColor: ModelColor): Observable<ResponseModel>;
  update(modelColor: ModelColor): Observable<ResponseModel>;
  delete(modelColor: ModelColor): Observable<ResponseModel>;
  getModelColorDetailsById(id: number): Observable<SingleResponseModel<ModelColorDetail>>;
  getAllModelColorDetails(): Observable<ListResponseModel<ModelColorDetail>>;
}
