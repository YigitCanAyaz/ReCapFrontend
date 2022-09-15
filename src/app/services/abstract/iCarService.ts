import { Observable } from "rxjs";
import { CarDetail } from "src/app/models/details/carDetail";
import { Car } from "src/app/models/entities/car";
import { ListResponseModel } from "src/app/models/listResponseModel";

export interface ICarService {
  getAll(): Observable<ListResponseModel<Car>>;
  getAllCarDetails(): Observable<ListResponseModel<CarDetail>>;
}
