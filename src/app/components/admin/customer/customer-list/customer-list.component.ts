import { Router } from '@angular/router';
import { CustomerService } from './../../../../services/concrete/customer.service';
import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/details/customerDetail';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerDetails: CustomerDetail[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCustomerDetails();
  }

  getAllCustomerDetails(): void {
    this.customerService.getAllCustomerDetails().subscribe(result => {
      this.customerDetails = result.data;
    })
  }

  getCustomerDetailViewById(customerId: number): void {
    this.router.navigate(["/admin/customers/view/" + customerId]);
  }

}
