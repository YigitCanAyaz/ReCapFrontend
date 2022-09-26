import { Component, OnInit } from '@angular/core';
import { ModelDetail } from 'src/app/models/details/modelDetail';
import { Model } from 'src/app/models/entities/model';
import { ModelService } from 'src/app/services/concrete/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})

export class ModelComponent implements OnInit {

  models: Model[] = [];
  modelDetails: ModelDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.modelService.getAll().subscribe(result => {
      this.models = result.data;
      this.dataLoaded = true;
    });
  }

  getAllModelDetails(): void {
    this.modelService.getAllModelDetails().subscribe(result => {
      this.modelDetails = result.data;
      this.dataLoaded = true;
    });
  }

}
