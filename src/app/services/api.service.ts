import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AddressData } from '../common.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  transferData = signal<AddressData[]>([]);

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
}

getAddresses(){
  return this.http.get<AddressData[]>('http://localhost:8080/addresses');
}

addHashtagwithDoorNo(arr: AddressData[]){
  return arr.map((obj:AddressData) => ({
    ...obj,
    door: `#${obj.door}`
  }))
}



}
