import { Component } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-content-parent',
  standalone: true,
  imports: [ContentChildComponent],
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.scss'
})
export class ContentParentComponent {

}
