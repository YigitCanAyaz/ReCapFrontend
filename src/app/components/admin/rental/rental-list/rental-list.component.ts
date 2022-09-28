import { Router } from '@angular/router';
import { RentalService } from './../../../../services/concrete/rental.service';
import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/details/rentalDetail';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentalDetails: RentalDetail[] = [];

  constructor(private rentalService: RentalService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRentalDetails();
  }

  getAllRentalDetails(): void {
    this.rentalService.getAllRentalDetails().subscribe(response => {
      this.rentalDetails = response.data;
    })
  }

  getRentalDetailViewById(rentalId: number): void {
    this.router.navigate(["/admin/rentals/view/" + rentalId]);
  }

}
