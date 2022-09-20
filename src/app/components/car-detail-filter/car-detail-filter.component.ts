import { ColorService } from './../../services/concrete/color.service';
import { BrandService } from './../../services/concrete/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';

@Component({
  selector: 'app-car-detail-filter',
  templateUrl: './car-detail-filter.component.html',
  styleUrls: ['./car-detail-filter.component.css']
})
export class CarDetailFilterComponent implements OnInit {

  constructor(private brandService: BrandService, private colorService: ColorService) { }

  brands: Brand[] = [];
  colors: Color[] = [];
  selectedBrandId: number;
  selectedColorId: number;

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();
  }

  getAllBrands(): void {
    this.brandService.getAll().subscribe(result => {
      this.brands = result.data;
    })
  }

  getAllColors(): void {
    this.colorService.getAll().subscribe(result => {
      this.colors = result.data;
    })
  }

  filterCarDetailMenu(): void {
  }

}
