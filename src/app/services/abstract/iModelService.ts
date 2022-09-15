import { Observable } from "rxjs";
import { ModelDetail } from "src/app/models/details/modelDetail";
import { Model } from "src/app/models/entities/model";
import { ListResponseModel } from "src/app/models/listResponseModel";

export interface IModelService {
  getAll(): Observable<ListResponseModel<Model>>;
  getAllModelDetails(): Observable<ListResponseModel<ModelDetail>>;
}
