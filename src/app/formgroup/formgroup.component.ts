import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-formgroup',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, InputTextareaModule,
     InputNumberModule, CheckboxModule, ButtonModule],
  templateUrl: './formgroup.component.html',
  styleUrl: './formgroup.component.scss'
})
export class FormgroupComponent {
  registerForm!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.initializeForm();
  }
initializeForm(){
  this.registerForm = this.fb.group({
    username : [''],
    comment : [''],
    phone : [''],
    terms : [false]
  })
}
  onSubmit(){
    console.log(this.registerForm.value);
    
  }
}
