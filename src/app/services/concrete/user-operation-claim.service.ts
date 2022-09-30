import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOperationClaim } from 'src/app/models/entities/userOperationClaim';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { IUserOperationClaimService } from '../abstract/iUserOperationClaimService';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService implements IUserOperationClaimService {

  baseUrl: string = 'https://localhost:44343/api/userOperationClaims/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<UserOperationClaim>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<UserOperationClaim>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserOperationClaim>>(path);
  }

  add(userOperationClaim: UserOperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", userOperationClaim);
  }

}
