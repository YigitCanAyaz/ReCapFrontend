import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/details/rentalDetail';
import { Rental } from 'src/app/models/entities/rental';
import { RentalService } from 'src/app/services/concrete/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})

export class RentalComponent implements OnInit {

  rentals: Rental[] = [];
  rentalDetails: RentalDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.rentalService.getAll().subscribe(result => {
      this.rentals = result.data;
      this.dataLoaded = true;
    });
  }

  getAllRentalDetails(): void {
    this.rentalService.getAllRentalDetails().subscribe(result => {
      this.rentalDetails = result.data;
      this.dataLoaded = true;
    });
  }

}
