import { RentalService } from 'src/app/services/concrete/rental.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-this-car',
  templateUrl: './rent-this-car.component.html',
  styleUrls: ['./rent-this-car.component.css']
})
export class RentThisCarComponent implements OnInit {

  @Input() currentCarId: number;
  availability: boolean;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.isCarAvailable(this.currentCarId);
  }

  isCarAvailable(carId: number): void {
    this.rentalService.isCarAvailable(carId).subscribe(response => {
      this.availability = response.data;
    });
  }

}
