import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required,Validators.pattern("^[a-zA-Z]+$")],
      lastname: ['', [Validators.required ,Validators.pattern("^[a-zA-Z]+$")], this.customValidator.userNameValidator.bind(this.customValidator)],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10),Validators.minLength(10 )]],
      date :['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.registerForm.value);
    }
  }
}
