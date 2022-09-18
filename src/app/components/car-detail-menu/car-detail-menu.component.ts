import { CarDetail } from 'src/app/models/details/carDetail';
import { CarService } from './../../services/concrete/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail-menu',
  templateUrl: './car-detail-menu.component.html',
  styleUrls: ['./car-detail-menu.component.css']
})
export class CarDetailMenuComponent implements OnInit {

  carDetails: CarDetail[] = [];
  imageUrl = "https://localhost:44343"

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
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

  getAllCarDetailsByBrandId(brandId: number): void {
    this.carService.getAllCarDetailsByBrandId(brandId).subscribe(result => {
      this.carDetails = result.data;
    })
  }

  getAllCarDetailsByColorId(colorId: number): void {
    this.carService.getAllCarDetailsByBrandId(colorId).subscribe(result => {
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
}
