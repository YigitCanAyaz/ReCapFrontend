import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/entities/color';
import { Model } from 'src/app/models/entities/model';
import { ColorService } from 'src/app/services/concrete/color.service';
import { ModelService } from 'src/app/services/concrete/model.service';
import { UserOperationClaimService } from 'src/app/services/concrete/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrls: ['./user-operation-claim-add.component.css']
})
export class UserOperationClaimAddComponent implements OnInit {

  userOperationClaimAddForm: FormGroup;
  users: Model[] = [];
  operationClaims: Color[] = [];

  constructor(private userOperationClaimService: UserOperationClaimService, private userService: ModelService, private operationClaimService: ColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createUserOperationClaimAddForm();
    this.getAllModels();
    this.getAllColors();
  }

  createUserOperationClaimAddForm(): void {
    this.userOperationClaimAddForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      operationClaimId: ["", [Validators.required]]
    });
  }

  addUserOperationClaim(): void {
    console.log(this.userOperationClaimAddForm.value);
    if (this.userOperationClaimAddForm.valid) {
      this.userOperationClaimService.add(this.userOperationClaimAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/useroperationclaims/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllModels(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response.data;
    })
  }

  getAllColors(): void {
    this.operationClaimService.getAll().subscribe(response => {
      this.operationClaims = response.data;
    })
  }

}
