import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
@Input() stuItem: number = 0;
  studentName = 'Krishna Pandey';

  sayGoodMorningToTeacher() {
    console.log('hi from student component', this.studentName);
  }
}
