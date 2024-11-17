import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AddressData } from '../common.model';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent {
  addresses!: AddressData[];
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getTodos().subscribe({
      next:(data)=>{
        console.log('data :', data);
        
      }
    });

    this.getAddressFromApiService();
  }

  getAddressFromApiService(){
    this.apiService.getAddresses().subscribe({
      next:(res:AddressData[])=>{
        console.log('res :', res);
        this.addresses = this.apiService.addHashtagwithDoorNo(res);
        
      }
    })
  }

  ngOnDestroy(){
   this.apiService.transferData.update(value => value.concat(this.addresses))
  }
}
