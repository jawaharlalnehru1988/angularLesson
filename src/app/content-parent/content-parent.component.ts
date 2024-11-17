import { Component } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-content-parent',
  standalone: true,
  imports: [ContentChildComponent],
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.scss'
})
export class ContentParentComponent {

  constructor(private apiService: ApiService){}

  ngOnInit(){
     const receivedData = this.apiService.transferData();
     console.log('receivedData :', receivedData);
  }

}
