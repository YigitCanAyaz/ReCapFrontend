import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/concrete/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})

export class ColorComponent implements OnInit {

  colors: Color[] = [];
  dataLoaded: boolean = false;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.colorService.getAll().subscribe(result => {
      this.colors = result.data;
      this.dataLoaded = true;
    });
  }
}
