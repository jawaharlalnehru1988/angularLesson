import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-two-way-data',
  standalone: true,
  imports: [FormsModule, InputTextModule,  CheckboxModule, RadioButtonModule, DropdownModule, CalendarModule],
  templateUrl: './two-way-data.component.html',
  styleUrl: './two-way-data.component.scss'
})
export class TwoWayDataComponent {
  value: string = 'intial value';
  checked: boolean = false;
  ingredient!: string;
  cities: City[] | undefined;
  date: Date | undefined;
  selectedCity: City = {name: "New York", code: "NY"};

  ngOnInit() {
    this.date = new Date(2024, 2, 16);
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
  typeValue(event: any) {
    console.log('value :', this.value);

  }
}
