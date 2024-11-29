import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AddressData } from '../common.model';
import { Comment } from '../common-modal/commen.model';

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

getAllComments(){
  return this.http.get('http://localhost:8080/comment/all');
}

createComment(data: any){
  return this.http.post('http://localhost:8080/comment/create', data);
}

updateComment(payload:Comment, id: number){
return this.http.put(`http://localhost:8080/comment/update/${id}`, payload);
}

deleteComment(id: number){
  return this.http.delete(`http://localhost:8080/comment/delete/${id}`);
}

}
