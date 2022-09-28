import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  dashboardActivate: boolean = false;
  brandActive: boolean = false;
  carActive: boolean = false;
  customerActive: boolean = false;
  colorActive: boolean = false;
  modelActive: boolean = false;
  rentalActive: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
    let currentComponent = this.router.url.split('/')[2];
    if (currentComponent !== undefined) {
      this.setAndRemoveActive(currentComponent);
    } else {
      this.setAndRemoveActive("");
    }
  }

  checkActive(menuActive: boolean): string {
    return menuActive ? "active" : "";
  }

  setAndRemoveActive(menuName: string) {

    this.dashboardActivate = false;
    this.brandActive = false;
    this.carActive = false;
    this.customerActive = false;
    this.colorActive = false;
    this.modelActive = false;
    this.rentalActive = false;


    switch (menuName) {
      case '':
        this.dashboardActivate = true;
        break;
      case 'brands':
        this.brandActive = true;
        break;
      case 'cars':
        this.carActive = true;
        break;
      case 'colors':
        this.colorActive = true;
        break;
      case 'customers':
        this.customerActive = true;
        break;
      case 'models':
        this.modelActive = true;
        break;
      case 'rentals':
        this.rentalActive = true;
        break;

      default:
        break;
    }
  }

}
