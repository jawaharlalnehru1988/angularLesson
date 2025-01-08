import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
constructor(private sharedService: SharedService){};

changetheme(theme: string): void {
  this.sharedService.setTheme(theme);
}
}
