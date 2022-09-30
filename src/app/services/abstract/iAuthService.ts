import { RegisterModel } from './../../models/details/registerModel';
import { Observable } from "rxjs";
import { LoginModel } from "src/app/models/details/loginModel";
import { TokenModel } from "src/app/models/details/tokenModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IAuthService {
  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>>;
  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>>
}
