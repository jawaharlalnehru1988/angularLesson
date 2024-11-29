import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ApiService } from '../services/api.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { Comment } from '../common-modal/commen.model';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-displaycomment',
  standalone: true,
  imports: [TableModule, ToastModule, ButtonModule, RouterLink, DialogModule, ReactiveFormsModule, CheckboxModule, InputNumberModule],
  templateUrl: './displaycomment.component.html',
  styleUrl: './displaycomment.component.scss',
  providers: [MessageService]
})
export class DisplaycommentComponent {
products:any = [];
visible:boolean = false;
registerForm!: FormGroup;
commentIndex!: number;

constructor(private apiService: ApiService, private fb: FormBuilder, private messageService: MessageService) {

}

ngOnInit() {
  
this.getAllComments();
  this.initializeForm();
}

getAllComments(){
  this.apiService.getAllComments().subscribe({
    next: (data) => {
      console.log('data :', data);
      this.products = data;
    }
  });
}

editProduct(product:any, id:number){
  this.visible = true;
  this.registerForm.get('username')?.setValue(product.username);
  this.registerForm.get('comment')?.setValue(product.comment);
  this.registerForm.get('phone')?.setValue(product.phone);
  this.registerForm.get('terms')?.setValue(product.terms);

  this.commentIndex = id;
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

onUpdate(){
  console.log("on upate", this.commentIndex, this.registerForm.value);
  this.apiService.updateComment(this.registerForm.value, this.commentIndex).subscribe({
    next: (res) => {
      console.log('updated Comment :', res);
      this.messageService.add({severity:'success', summary: 'Updated', detail: 'Updated Successfully'});
    },
    error: (err) => {
      console.log('error :', err);
    },
    complete: () => {
      console.log('complete');
      this.getAllComments();
    },
  })
}

deleteCommentwithId(id:number){
  this.apiService.deleteComment(id).subscribe({
    next: (res) => {
      console.log('deleted Comment :', res);
      this.getAllComments();
      this.messageService.add({severity:'success', summary: 'Deleted', detail: 'Deleted Successfully'});
    },
    error: (err) => {
      console.log('error :', err);
    },
    complete: () => {
      console.log('complete');
    },
  })
}
}
