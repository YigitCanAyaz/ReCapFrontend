export interface RentalDetail {
  id: number;
  carId: number;
  customerId: number;
  brandName: string;
  modelName: string;
  modelYear: number;
  firstName: string;
  lastName: string;
  rentDate: Date;
  returnDate: Date;
}
