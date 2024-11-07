import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ButtonModule, NgFor],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
controlVar = {}; 
controlVar2 = [];

dataObj = {
    subData: {
        subData2: {
          firstName: 'hi there, this is ask nehru'
        }
    }
}

age: number = 16;
employee:string = "guesjdsflsdjf";

fruitsDetails = [
    {
        id: 1,
        name: 'apple',
        price: 10
    },
    {
        id: 2,
        name: 'banana',
        price: 20
    },
    {
        id: 3,
        name: 'orange',
        price: 30
    },
    {
        id: 4,
        name: 'pear',
        price: 40
    },
    {
        id: 5,
        name: 'strawberry',
        price: 50
    }
];
addFruit(){
  this.fruitsDetails = [
    {
        id: 1,
        name: 'apple',
        price: 10
    },
    {
        id: 2,
        name: 'banana',
        price: 20
    },
    {
        id: 3,
        name: 'orange',
        price: 30
    },
    {
        id: 4,
        name: 'pear',
        price: 40
    },
    {
        id: 5,
        name: 'strawberry',
        price: 50
    },
    {
        id: 6,
        name: 'mango',
        price: 60
    }
];
}

trackByFn(index: number, item:any) {
  return item.id; 
}

emptyFruit(){
  this.fruitsDetails = [];
}

}
