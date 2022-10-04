import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/entities/rental';
import { RentalService } from 'src/app/services/concrete/rental.service';

@Component({
  selector: 'app-rental-remove',
  templateUrl: './rental-remove.component.html',
  styleUrls: ['./rental-remove.component.css']
})
export class RentalRemoveComponent implements OnInit {

  constructor(private rentalService: RentalService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["rentalId"]) {
        this.getRentalById(params["rentalId"]);
      }
    });
  }

  getRentalById(id: number): void {
    this.rentalService.getById(id).subscribe(response => {
      this.removeRental(response.data);
    })
  }

  removeRental(rental: Rental): void {
    this.rentalService.delete(rental).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/rentals/list']);
    });
  }

}
