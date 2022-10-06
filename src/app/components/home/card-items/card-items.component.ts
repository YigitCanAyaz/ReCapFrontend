import { RentalService } from 'src/app/services/concrete/rental.service';
import { CustomerService } from 'src/app/services/concrete/customer.service';
import { ColorService } from 'src/app/services/concrete/color.service';
import { ModelService } from 'src/app/services/concrete/model.service';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/concrete/brand.service';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css']
})
export class CardItemsComponent implements OnInit {

  brandLength: number;
  modelLength: number;
  colorLength: number;
  customerLength: number;
  rentalLength: number;

  constructor(private brandService: BrandService, private modelService: ModelService, private colorService: ColorService, private customerService: CustomerService, private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getAllBrandLength();
    this.getAllModelLength();
    this.getAllColorLength();
    this.getAllCustomerLength();
    this.getAllRentalLength();
  }

  getAllBrandLength(): void {
    this.brandService.getAllBrandLength().subscribe(response => {
      this.brandLength = response.data;
    });
  }

  getAllModelLength(): void {
    this.modelService.getAllModelLength().subscribe(response => {
      this.modelLength = response.data;
    });
  }

  getAllColorLength(): void {
    this.colorService.getAllColorLength().subscribe(response => {
      this.colorLength = response.data;
    });
  }

  getAllCustomerLength(): void {
    this.customerService.getAllCustomerLength().subscribe(response => {
      this.customerLength = response.data;
    });
  }

  getAllRentalLength(): void {
    this.rentalService.getAllRentalLength().subscribe(response => {
      this.rentalLength = response.data;
    });
  }

}
