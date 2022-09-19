import { CarDetail } from './../../models/details/carDetail';
import { BrandService } from './../../services/concrete/brand.service';
import { CarService } from './../../services/concrete/car.service';
import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/concrete/color.service';
import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';

@Component({
  selector: 'app-car-detail-filter',
  templateUrl: './car-detail-filter.component.html',
  styleUrls: ['./car-detail-filter.component.css']
})
export class CarDetailFilterComponent implements OnInit {

  constructor(private carService: CarService, private brandService: BrandService, private colorService: ColorService) { }

  cars: CarDetail[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];

  ngOnInit(): void {
  }
}
