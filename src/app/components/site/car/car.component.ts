import { CarDetail } from '../../../models/details/carDetail';
import { CarService } from '../../../services/concrete/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.carService.getAll().subscribe(result => {
      this.cars = result.data;
      this.dataLoaded = true;
    });
  }
}
