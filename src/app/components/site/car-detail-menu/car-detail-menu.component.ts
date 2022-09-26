import { CarDetail } from 'src/app/models/details/carDetail';
import { CarService } from '../../../services/concrete/car.service';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail-menu',
  templateUrl: './car-detail-menu.component.html',
  styleUrls: ['./car-detail-menu.component.css']
})
export class CarDetailMenuComponent implements OnInit {

  carDetails: CarDetail[] = [];

  filterText: string = "";

  selectedBrandId: number;
  selectedColorId: number;
  minDailyPrice: number;
  maxDailyPrice: number;

  imageUrl = "https://localhost:44343";

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"] && params['colorId'] && params['minDailyPrice'] && params['maxDailyPrice']) {
        this.getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(params["brandId"], params['colorId'], params['minDailyPrice'], params['maxDailyPrice']);
      } else if (params["brandId"]) {
        this.getAllCarDetailsByBrandId(params["brandId"]);
      } else if (params["colorId"]) {
        this.getAllCarDetailsByColorId(params["colorId"])
      } else {
        this.getAllCarDetails();
      }
    });
  }

  getAllCarDetails(): void {
    this.carService.getAllCarDetails().subscribe(result => {
      this.carDetails = result.data;
    })
  }

  getAllCarDetailsByBrandId(cardetailId: number): void {
    this.carService.getAllCarDetailsByBrandId(cardetailId).subscribe(result => {
      this.carDetails = result.data;
    })
  }

  getAllCarDetailsByColorId(colorId: number): void {
    this.carService.getAllCarDetailsByColorId(colorId).subscribe(result => {
      this.carDetails = result.data;
    })
  }

  getCarImage(carDetail: CarDetail): string {
    if (carDetail.imagePath.length === 0) {
      const path = this.imageUrl + "/Images/default.png";
      return path;
    }
    else {
      const path = this.imageUrl + carDetail.imagePath;
      return path;
    }
  }

  getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId: number, colorId: number, minDailyPrice: number, maxDailyPrice: number): void {
    this.carService.getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId, colorId, minDailyPrice, maxDailyPrice).subscribe(result => {
      this.selectedBrandId = brandId;
      this.selectedColorId = colorId;
      this.minDailyPrice = minDailyPrice;
      this.maxDailyPrice = maxDailyPrice;
      this.carDetails = result.data;
    })
  }
}