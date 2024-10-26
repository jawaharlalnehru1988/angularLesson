import { Component, Input } from '@angular/core';
import { NameObj } from '../common.model';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  initialValue = 0;
@Input() value!: NameObj[];
@Input({alias: "student"}) studentObj!: NameObj;
@Input() set age(ageValue:number){

  this.initialValue = ageValue*20;
  
};

get age(){
  return this.initialValue;
}


}
