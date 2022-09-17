import { Observable } from "rxjs";
import { RentalDetail } from "src/app/models/details/rentalDetail";
import { Rental } from "src/app/models/entities/rental";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IRentalService {
  getAll(): Observable<ListResponseModel<Rental>>;
  getById(id: number): Observable<SingleResponseModel<Rental>>;
  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>>;
  getRentalDetailsById(id: number): Observable<SingleResponseModel<RentalDetail>>;
}
