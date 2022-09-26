import { ColorService } from './../../services/concrete/color.service';
import { BrandService } from './../../services/concrete/brand.service';
import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-detail-filter',
  templateUrl: './car-detail-filter.component.html',
  styleUrls: ['./car-detail-filter.component.css']
})
export class CarDetailFilterComponent implements OnInit {

  constructor(private brandService: BrandService, private colorService: ColorService, private router: Router) { }

  brands: Brand[] = [];
  colors: Color[] = [];

  @Input()
  selectedBrandId: number;

  @Input()
  selectedColorId: number;

  @Input()
  minDailyPrice: number;

  @Input()
  maxDailyPrice: number;

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

  isBrandSelected(brandId: number): any {
    console.log(brandId);
    console.log(this.selectedBrandId);
    if (this.selectedBrandId === brandId) {
      return true;
    }
    return null;
  }

  filter(): void {

    let filterUrl: string = "/cars/filter";

    if (this.selectedBrandId) {
      filterUrl += `/brandId/${this.selectedBrandId}`;
    }

    if (this.selectedColorId) {
      filterUrl += `/colorId/${this.selectedColorId}`;
    }

    if (this.minDailyPrice) {
      filterUrl += `/minDailyPrice/${this.minDailyPrice}`;
    }

    if (this.maxDailyPrice) {
      filterUrl += `/maxDailyPrice/${this.maxDailyPrice}`;
    }

    console.log(filterUrl);

    this.router.navigate([filterUrl]);

    "https://localhost:44343/api/cars/getallcardetailsbybrandid?brandid=1colorid?colorid=1mindailyprice?mindailyprice=2000maxdailyprice?maxdailyprice=4000"
  }
}