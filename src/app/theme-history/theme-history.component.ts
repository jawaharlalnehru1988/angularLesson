import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-theme-history',
  standalone: true,
  imports: [],
  templateUrl: './theme-history.component.html',
  styleUrl: './theme-history.component.scss'
})
export class ThemeHistoryComponent {
themeHistory:string[] = [];

constructor(private sharedService: SharedService){}

ngOnInit(){
  this.sharedService.theme$.subscribe((theme)=> {
    this.themeHistory.push(theme);
  })
}

}
