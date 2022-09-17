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
  dataLoaded: boolean = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  getAllCarDetails(): void {
    this.carService.getAllCarDetails().subscribe(result => {
      this.carDetails = result.data;
      this.dataLoaded = true;
    })
  }

}
