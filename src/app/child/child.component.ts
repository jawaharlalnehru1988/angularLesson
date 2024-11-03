import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { NameObj } from '../common.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ButtonModule],
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

@Input({transform: (value:number)=> value*2}) weight!: number;
@Input({transform: transformValue}) complexObj!: NameObj[];

message:string[] = ["Hello", "World"];
@Output("valueChild") valueFromChild = new EventEmitter<string[]>();
sayHelloToParent(){
  this.valueFromChild.emit(this.message);
}

sendDataToParent = output<string>({alias: "dataOutput"});

dataFromchild(messageFromOupt: string){

  this.sendDataToParent.emit(messageFromOupt);
}

}

function transformValue(value: NameObj[]): NameObj[] {

  return value.map((item)=>{
    return {
      ...item,
      value: item.value*2
    }
  })
}
