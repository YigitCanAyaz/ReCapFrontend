import { Observable } from "rxjs";
import { UserForInfoDetail } from "src/app/models/details/userForInfoDetail";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IUserService {
  getAll(): Observable<ListResponseModel<UserForInfoDetail>>;
  getById(id: number): Observable<SingleResponseModel<UserForInfoDetail>>;
}
