import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/details/loginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/details/tokenModel';
import { RegisterModel } from 'src/app/models/details/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44343/api/auth/';

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel);
  }

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "register", registerModel);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
