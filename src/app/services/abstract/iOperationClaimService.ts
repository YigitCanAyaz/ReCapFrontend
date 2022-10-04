import { Observable } from "rxjs";
import { OperationClaim } from "src/app/models/entities/operationClaim";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IOperationClaimService {
  getAll(): Observable<ListResponseModel<OperationClaim>>;
  getById(id: number): Observable<SingleResponseModel<OperationClaim>>;
  add(operationClaim: OperationClaim): Observable<ResponseModel>;
  update(operationClaim: OperationClaim): Observable<ResponseModel>;
  delete(operationClaim: OperationClaim): Observable<ResponseModel>;
}
