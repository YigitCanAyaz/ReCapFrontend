import { Observable } from "rxjs";
import { RentalDetail } from "src/app/models/details/rentalDetail";
import { Rental } from "src/app/models/entities/rental";
import { ListResponseModel } from "src/app/models/listResponseModel";

export interface IRentalService {
  getAll(): Observable<ListResponseModel<Rental>>;
  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>>;
}
