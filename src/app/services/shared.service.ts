import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // private themeSubject = new BehaviorSubject<string>("Light");
  // theme$ = this.themeSubject.asObservable();

  // private themeSubject = new Subject<string>();
  // theme$ = this.themeSubject.asObservable();

  
  private themeSubject = new ReplaySubject<string>(2);
  theme$ = this.themeSubject.asObservable();

  setTheme(theme: string){
    this.themeSubject.next(theme);
  }

  constructor() { }
}
