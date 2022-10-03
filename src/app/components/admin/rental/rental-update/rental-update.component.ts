import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/details/carDetail';
import { CustomerDetail } from 'src/app/models/details/customerDetail';
import { CarService } from 'src/app/services/concrete/car.service';
import { CustomerService } from 'src/app/services/concrete/customer.service';
import { RentalService } from 'src/app/services/concrete/rental.service';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {

  rentalUpdateForm: FormGroup;
  carDetails: CarDetail[] = [];
  customerDetails: CustomerDetail[] = [];

  constructor(private rentalService: RentalService, private carService: CarService, private customerService: CustomerService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createRentalUpdateForm();
    this.getAllCarDetails();
    this.getAllCustomerDetails();
  }

  createRentalUpdateForm(): void {
    this.rentalUpdateForm = this.formBuilder.group({
      carId: ["", [Validators.required]],
      customerId: ["", [Validators.required]]
    });
  }

  updateRental(): void {
    console.log(this.rentalUpdateForm.value);
    let rentalModel = Object.assign({}, this.rentalUpdateForm.value);
    rentalModel.rentDate = new Date();
    if (this.rentalUpdateForm.valid) {
      this.rentalService.update(rentalModel).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/rentals/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllCarDetails(): void {
    this.carService.getAllCarDetails().subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getAllCustomerDetails(): void {
    this.customerService.getAllCustomerDetails().subscribe(response => {
      this.customerDetails = response.data;
    })
  }
}
