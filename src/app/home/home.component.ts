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

  // fruitsData = [
  //   {
  //     id: 1,
  //     name: 'Apple',
  //     price: 100
  //   },
  //   {
  //     id: 2,
  //     name: 'Orange',
  //     price: 200
  //   },
  //   {
  //     id: 3,
  //     name: 'Banana',
  //     price: 300
  //   },
  //   {
  //     id: 4,
  //     name: 'Mango',
  //     price: 400
  //   },
  // ];

  constructor(private http: HttpClient, private commonService: CommonService) {
    // this.http.get('http://localhost:8080/api/fruits').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.fruitsData = data;
    //   }
    // })
  }

  ngOnInit() {
    this.commonService.getFruits().subscribe({
      next:(data)=>{
        console.log(data);
        this.fruitsData = data;
      }
    })
  }
}
