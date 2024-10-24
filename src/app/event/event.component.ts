import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  fruitsData: any;
  constructor(private commonService: CommonService){ }

  ngOnInit(): void {
    this.commonService.getFruits().subscribe({
      next: (data) => {
        console.log('data :', data);
        this.fruitsData = data;
      }
    })
  }


  onClick(event: string) {
  console.log('event :', event);
  }

  onKeyup(event: any) {
    const value = (event.target as HTMLInputElement).value;
    console.log('value :', value);
  }
  onDateSelect(){
    console.log('onDateSelect');
  }
  onFocus(){
    console.log('onFocus');
  }
  onBlur(){
    console.log('onBlur');
  }
  buttonClick(fruit:string){
  console.log('fruit :', fruit);

  }

  
}
