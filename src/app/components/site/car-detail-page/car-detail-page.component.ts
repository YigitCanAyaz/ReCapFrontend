import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/details/carDetail';
import { CarService } from 'src/app/services/concrete/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetail: CarDetail;
  dataLoaded: boolean = false;
  imageUrl = "https://localhost:44343"

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailsById(params["carId"]);
    });
  }

  getCarDetailsById(id: number): void {
    this.carService.getCarDetailsById(id).subscribe(response => {
      this.carDetail = response.data;
      this.dataLoaded = true;
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
