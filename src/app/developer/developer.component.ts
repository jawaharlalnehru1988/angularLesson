import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  currentTheme: string = '';
  constructor(private sharedService: SharedService){}

  ngOnInit(){
    this.sharedService.theme$.subscribe((theme)=>{
    console.log('theme :', theme);
      this.currentTheme = theme;
    })
  }


}
