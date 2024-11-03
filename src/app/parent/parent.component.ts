import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NameObj } from '../common.model';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  numValue:NameObj[] = [
    {
      id: 1,
      name: 'one',
      value: 1
    },
    {
      id: 2,
      name: 'two',
      value: 2
    },
    {
      id: 3,
      name: 'three',
      value: 3
    }
  ];
  studentObj: NameObj = {
    id: 4,
    name: 'four',
    value: 4
  };

  dataFromChild!: string[]
  dataFromChildOutput!: string;

  valueFromChild(event:string[]) {
    console.log(event);
    this.dataFromChild = event;
  }

  dataFromChild2(event:string){
  console.log('event :', event);
  this.dataFromChildOutput = event;

  }
}
