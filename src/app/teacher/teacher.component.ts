import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StudentComponent } from "../student/student.component";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [StudentComponent, InputTextModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
@ViewChild('teacherRef') teacherRefcom: ElementRef | undefined;
@ViewChild('teacherInput') teacherInputcom: ElementRef | undefined;
@ViewChild('teacherCheckbox') teacherCheckboxcom: ElementRef | undefined;

@ViewChildren('teacherButton') teacherButtoncom: QueryList<ElementRef> | undefined;

@ViewChild(StudentComponent) studentcom: StudentComponent | undefined;
@ViewChildren(StudentComponent) studentList: QueryList<StudentComponent> | undefined;

@ViewChild('primeRef', {static: true}) inputTextcom: ElementRef | undefined;

ngOnInit(){
  this.inputTextcom!.nativeElement.value = 'some value';
  console.log(this.inputTextcom?.nativeElement.value);
  

}

ngAfterViewInit(){
  console.log(this.teacherRefcom?.nativeElement.textContent);
this.teacherRefcom!.nativeElement.textContent = 'teacher works hardly';

this.teacherInputcom!.nativeElement.value = 'teacher request you to type here';
console.log('this.teacherInputcom :', this.teacherInputcom?.nativeElement.value);

this.teacherCheckboxcom!.nativeElement.checked = false;
this.teacherButtoncom!.forEach((item)=>{
  console.log(item.nativeElement.textContent);
})

this.studentcom?.sayGoodMorningToTeacher();
// this.inputTextcom!.nativeElement.value = 'some value';
console.log(this.inputTextcom?.nativeElement.value);

}

ngAfterViewChecked(){
  console.log("changes are detected");

  console.log(this.inputTextcom?.nativeElement.value);
  
}
}
