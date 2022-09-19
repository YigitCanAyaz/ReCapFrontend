import { BrandService } from './../../services/concrete/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand: Brand;
  filterText: string = "";

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand): void {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }

  getAllBrandClass() {
    if (!this.currentBrand) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }


}
