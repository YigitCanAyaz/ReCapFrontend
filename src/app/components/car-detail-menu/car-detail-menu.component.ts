import { CarService } from './../../services/concrete/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail-menu',
  templateUrl: './car-detail-menu.component.html',
  styleUrls: ['./car-detail-menu.component.css']
})
export class CarDetailMenuComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

}
