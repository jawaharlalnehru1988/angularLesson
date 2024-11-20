import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm = new FormControl('', Validators.required);

  updateValue(){
    this.reactiveForm.setValue('hello');
  }

  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe({
      next: (data) => {
        console.log('data :', data);
        console.log('this.reactiveForm.dirty; :', this.reactiveForm.dirty);
        console.log('this.reactiveForm.pristine; :', this.reactiveForm.pristine);

      }
    });

    this.reactiveForm.statusChanges.subscribe({
      next: (status) => {

        console.log('status :', status);
        console.log('this.reactiveForm.valid :', this.reactiveForm.valid);
        console.log('this.reactiveForm.invalid :', this.reactiveForm.invalid);
      }

    })
  }

  onFocus(){
    console.log('user has clicked the input field');
  }
}
