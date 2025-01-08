import { Component } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { DeveloperComponent } from "../developer/developer.component";
import { ThemeHistoryComponent } from "../theme-history/theme-history.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserComponent, DeveloperComponent, ThemeHistoryComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
