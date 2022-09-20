import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail-model-filter',
  templateUrl: './car-detail-model-filter.component.html',
  styleUrls: ['./car-detail-model-filter.component.css']
})
export class CarDetailModelFilterComponent implements OnInit {

  viewAllCarDetail: boolean = true;
  viewCurrentCarDetail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  setViewCurrentCarDetail() {
    this.viewCurrentCarDetail = true;
  }

  abortViewCurrentCarDetail() {
    this.viewCurrentCarDetail = false;
  }

  setViewAllCarDetail() {
    this.viewAllCarDetail = true;
  }

  abortViewAllCarDetail() {
    this.viewAllCarDetail = false;
  }

  getAllCarDetailClass() {
    if (this.viewAllCarDetail) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }
}
