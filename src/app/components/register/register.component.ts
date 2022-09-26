import { AuthService } from 'src/app/services/concrete/auth.service';
import { MustMatchValidator } from './../../providers/mustMatchValidator';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      // confirmPassword: ["", [Validators.required]],
    }
    );
  }

  get firstName() { return this.registerForm.get('firstName') }
  get lastName() { return this.registerForm.get('firstName') }
  get email() { return this.registerForm.get('firstName') }
  get password() { return this.registerForm.get('firstName') }
  // get confirmPassword() { return this.registerForm.get('firstName') }

  register(): void {
    console.log(10);
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        localStorage.setItem("token", response.data.token);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }
  }

}
