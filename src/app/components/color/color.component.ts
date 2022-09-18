import { ColorService } from './../../services/concrete/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  currentColor: Color;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color): void {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllColorClass() {
    if (!this.currentColor) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }


}
