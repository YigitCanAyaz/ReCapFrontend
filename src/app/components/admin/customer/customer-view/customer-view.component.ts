import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/concrete/customer.service';
import { CustomerDetail } from 'src/app/models/details/customerDetail';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customerDetail: CustomerDetail;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["customerId"]) {
        this.getCustomerDetailsById(params["customerId"]);
      }
    });
  }

  getCustomerDetailsById(id: number): void {
    this.customerService.getCustomerDetailsById(id).subscribe(response => {
      this.customerDetail = response.data;
    })
  }

}
