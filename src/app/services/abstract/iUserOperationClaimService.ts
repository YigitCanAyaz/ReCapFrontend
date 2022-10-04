import { Observable } from "rxjs";
import { UserOperationClaimDetail } from "src/app/models/details/userOperationClaimDetail";
import { UserOperationClaim } from "src/app/models/entities/userOperationClaim";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IUserOperationClaimService {
  getAll(): Observable<ListResponseModel<UserOperationClaim>>;
  getById(id: number): Observable<SingleResponseModel<UserOperationClaim>>;
  add(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;
  update(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;
  delete(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;

  getAllUserOperationClaimDetails(): Observable<ListResponseModel<UserOperationClaimDetail>>;
  getUserOperationClaimDetailsById(id: number): Observable<SingleResponseModel<UserOperationClaimDetail>>;
}
