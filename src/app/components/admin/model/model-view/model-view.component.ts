import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/concrete/model.service';
import { ModelDetail } from 'src/app/models/details/modelDetail';

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.css']
})
export class ModelViewComponent implements OnInit {

  modelDetail: ModelDetail;

  constructor(private modelService: ModelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["modelId"]) {
        this.getModelDetailsById(params["modelId"]);
      }
    });
  }

  getModelDetailsById(id: number): void {
    this.modelService.getModelDetailsById(id).subscribe(response => {
      this.modelDetail = response.data;
    })
  }

}
