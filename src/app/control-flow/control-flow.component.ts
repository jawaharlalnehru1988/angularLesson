import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
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
}
