import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/details/customerDetail';
import { Customer } from 'src/app/models/entities/customer';
import { CustomerService } from 'src/app/services/concrete/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerDetails: CustomerDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.customerService.getAll().subscribe(result => {
      this.customers = result.data;
      this.dataLoaded = true;
    });
  }

  getAllCustomerDetails(): void {
    this.customerService.getAllCustomerDetails().subscribe(result => {
      this.customerDetails = result.data;
      this.dataLoaded = true;
    });
  }

}
