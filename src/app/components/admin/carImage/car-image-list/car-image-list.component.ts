import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarImageDetail } from 'src/app/models/details/carImageDetail';
import { CarImageService } from 'src/app/services/concrete/car-image.service';

@Component({
  selector: 'app-car-image-list',
  templateUrl: './car-image-list.component.html',
  styleUrls: ['./car-image-list.component.css']
})
export class CarImageListComponent implements OnInit {

  carImageDetails: CarImageDetail[] = [];
  filterText: string = "";

  constructor(private carImageService: CarImageService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCarImageDetails();
  }

  getAllCarImageDetails(): void {
    this.carImageService.getAllCarImageDetails().subscribe(response => {
      this.carImageDetails = response.data;
    })
  }

  getCarImageDetailViewById(carImageId: number): void {
    this.router.navigate(["/admin/carimages/view/" + carImageId]);
  }

}
