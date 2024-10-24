import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
fruitsData: any;
initialCount = 18;
selectedItem = 'Apple';  
userRating = 3;


items = ['Apple', 'Banana', 'Orange', 'Pear', 'Strawberry'];
constructor(private commonService: CommonService){}

ngOnInit(): void {
  this.commonService.getFruits().subscribe({
    next: (data) => {
      this.fruitsData = data;
      console.log('this.fruitsData :', this.fruitsData);
    }
  })
 
}


}
