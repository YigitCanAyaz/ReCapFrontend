import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/concrete/brand.service';

@Component({
  selector: 'app-brand-view',
  templateUrl: './brand-view.component.html',
  styleUrls: ['./brand-view.component.css']
})
export class BrandViewComponent implements OnInit {

  brand: Brand;

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getBrandById(params["brandId"]);
      }
    });
  }

  getBrandById(id: number): void {
    this.brandService.getById(id).subscribe(response => {
      this.brand = response.data;
    })
  }

}
