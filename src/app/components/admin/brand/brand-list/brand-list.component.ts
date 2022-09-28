import { Router } from '@angular/router';
import { BrandService } from './../../../../services/concrete/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [];

  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(): void {
    this.brandService.getAll().subscribe(result => {
      this.brands = result.data;
    })
  }

  getBrandViewById(brandId: number): void {
    this.router.navigate(["/admin/brands/view/" + brandId]);
  }

}
