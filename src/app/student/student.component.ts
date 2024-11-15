import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
@Input() stuItem: number = 0;
  studentName = 'Krishna Pandey';
  intValue: number = 0;
  changeValue: any;


  sayGoodMorningToTeacher(numbervlaue: number) {
    console.log('hi from student component', this.studentName);
    this.intValue = numbervlaue;;
  }
  studentVAlueChange(event:any){
    console.log(event.target.value);
    this.changeValue = event.target.value;
  }
}
