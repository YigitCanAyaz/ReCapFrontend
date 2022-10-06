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

  constructor(private brandService: BrandService, private modelService: ModelService, private colorService: ColorService, private customerService: CustomerService, private rentalService: RentalService) { }

  ngOnInit(): void {
  }

}
