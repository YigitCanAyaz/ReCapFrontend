import { Observable } from "rxjs";
import { RentalDetail } from "src/app/models/details/rentalDetail";
import { Rental } from "src/app/models/entities/rental";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface IRentalService {
  getAll(): Observable<ListResponseModel<Rental>>;
  getById(id: number): Observable<SingleResponseModel<Rental>>;
  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>>;
  getRentalDetailsById(id: number): Observable<SingleResponseModel<RentalDetail>>;

  isCarAvailable(carId: number): Observable<SingleResponseModel<boolean>>;

  add(rental: Rental): Observable<ResponseModel>;
  update(rental: Rental): Observable<ResponseModel>;
  delete(rental: Rental): Observable<ResponseModel>;

  getAllRentalLength(): Observable<SingleResponseModel<number>>;
}
