import { Router } from '@angular/router';
import { ModelService } from './../../../../services/concrete/model.service';
import { Component, OnInit } from '@angular/core';
import { ModelDetail } from 'src/app/models/details/modelDetail';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  modelDetails: ModelDetail[] = [];

  constructor(private modelService: ModelService, private router: Router) { }

  ngOnInit(): void {
    this.getAllModelDetails();
  }

  getAllModelDetails(): void {
    this.modelService.getAllModelDetails().subscribe(result => {
      this.modelDetails = result.data;
    })
  }

  getModelDetailViewById(modelId: number): void {
    this.router.navigate(["/admin/models/view/" + modelId]);
  }

}
