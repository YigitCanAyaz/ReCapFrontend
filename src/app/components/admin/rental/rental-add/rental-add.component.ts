import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/concrete/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm: FormGroup;
  models: Model[] = [];
  colors: Color[] = [];

  constructor(private rentalService: RentalService, private modelService: ModelService, private colorService: ColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createRentalAddForm();
    this.getAllModels();
    this.getAllColors();
  }

  createRentalAddForm(): void {
    this.rentalAddForm = this.formBuilder.group({
      modelId: ["", [Validators.required]],
      colorId: ["", [Validators.required]]
    });
  }

  addRental(): void {
    console.log(this.rentalAddForm.value);
    if (this.rentalAddForm.valid) {
      this.rentalService.add(this.rentalAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/rentals/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllModels(): void {
    this.modelService.getAll().subscribe(response => {
      this.models = response.data;
    })
  }

  getAllColors(): void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    })
  }
}
