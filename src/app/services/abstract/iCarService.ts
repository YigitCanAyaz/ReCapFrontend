import { SingleResponseModel } from './../../models/singleResponseModel';
import { Observable } from "rxjs";
import { CarDetail } from "src/app/models/details/carDetail";
import { Car } from "src/app/models/entities/car";
import { ListResponseModel } from "src/app/models/listResponseModel";
import { ResponseModel } from 'src/app/models/responseModel';

export interface ICarService {
  getAll(): Observable<ListResponseModel<Car>>;
  add(car: Car): Observable<ResponseModel>
  update(car: Car): Observable<ResponseModel>
  getById(id: number): Observable<SingleResponseModel<Car>>;
  getCarsByModelId(modelId: number): Observable<ListResponseModel<Car>>;
  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>>;
  getAllCarDetails(): Observable<ListResponseModel<CarDetail>>;
  getCarDetailsById(id: number): Observable<SingleResponseModel<CarDetail>>;
  getAllCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>>;
  getAllCarDetailsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>>;
  getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId: number, colorId: number, minDailyPrice: number, maxDailyPrice: number): Observable<ListResponseModel<CarDetail>>;
}
