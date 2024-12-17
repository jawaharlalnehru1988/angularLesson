import { Component } from '@angular/core';
import { GroceryComponent } from "../../components/grocery/grocery.component";
import { BucketComponent } from "../../components/bucket/bucket.component";

@Component({
  selector: 'app-ngrx',
  standalone: true,
  imports: [GroceryComponent, BucketComponent],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss'
})
export class NgrxComponent {

}
