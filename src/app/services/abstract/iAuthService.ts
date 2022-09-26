import { Observable } from "rxjs";
import { LoginModel } from "src/app/models/custom/loginModel";
import { TokenModel } from "src/app/models/custom/tokenModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IAuthService {
  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>>
}
