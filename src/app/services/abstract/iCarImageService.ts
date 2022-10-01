import { Observable } from "rxjs";
import { CarImageDetail } from "src/app/models/details/carImageDetail";
import { CarImage } from "src/app/models/entities/carImage";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from "src/app/models/responseModel";
import { SingleResponseModel } from "src/app/models/singleResponseModel";

export interface ICarImageService {
  getAll(): Observable<ListResponseModel<CarImage>>;
  getById(id: number): Observable<SingleResponseModel<CarImage>>;
  add(carImage: CarImage): Observable<ResponseModel>;
  getCarImageDetailsById(id: number): Observable<SingleResponseModel<CarImageDetail>>;
  getAllCarImageDetails(): Observable<ListResponseModel<CarImageDetail>>;
}
