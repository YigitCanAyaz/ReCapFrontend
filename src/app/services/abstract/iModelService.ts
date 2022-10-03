import { Observable } from "rxjs";
import { ModelDetail } from "src/app/models/details/modelDetail";
import { Model } from "src/app/models/entities/model";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IModelService {
  getAll(): Observable<ListResponseModel<Model>>;
  getById(id: number): Observable<SingleResponseModel<Model>>;

  getAllModelDetails(): Observable<ListResponseModel<ModelDetail>>;
  getModelDetailsById(id: number): Observable<SingleResponseModel<ModelDetail>>;
  add(model: Model): Observable<ResponseModel>;
}
