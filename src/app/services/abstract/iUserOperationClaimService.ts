import { Observable } from "rxjs";
import { UserOperationClaim } from "src/app/models/entities/userOperationClaim";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IUserOperationClaimService {
  getAll(): Observable<ListResponseModel<UserOperationClaim>>;
  getById(id: number): Observable<SingleResponseModel<UserOperationClaim>>;
  add(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;
}