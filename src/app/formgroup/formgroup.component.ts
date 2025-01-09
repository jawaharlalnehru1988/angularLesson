import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formgroup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, InputTextareaModule,
     InputNumberModule, CheckboxModule, ButtonModule],
  templateUrl: './formgroup.component.html',
  styleUrl: './formgroup.component.scss'
})
export class FormgroupComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService){}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z0-9 ]*'),
        ],
      ],
      comment: ['', Validators.maxLength(100)],
      phone: ['', [Validators.required,  Validators.pattern('^[6-9][0-9]{9}$')]],
      terms: [false, Validators.requiredTrue],
    });
  }
  onSubmit() {
    
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.apiService.createComment(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('data :', res);
        },
        error: (err) => {
          console.log('error :', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }

  }

  getValidationError(userRegister:any){
    if(userRegister?.hasError('required')){
      return 'User name is required';
    } else if(userRegister?.hasError('minlength')){
      return 'User name must be at least 3 characters';
    } else if(userRegister?.hasError('maxlength')){
      return 'User name must be at most 20 characters';
    } else if(userRegister?.hasError('pattern')){
      return 'User name can only contain letters and numbers';
    } else {
      return '';
    }

  }
}
