import { Injectable } from '@angular/core';
import { interval, Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChangeService {

 private secondsCounter:Observable<number>= interval(15000);
 private eslogan=new BehaviorSubject<string>("Grande Ventes D'entrepôt");
 private elements:Array<string>=["Grande Ventes D'entrepôt","Ce Samedi","Ne ratez pas votre chance"];

  getEslogan(): Observable<string> {
    return this.eslogan.asObservable();
  } 

constructor() {} 
 
 public dispatchValues(){
    let index=1; 
    this.secondsCounter.subscribe(() =>{
      this.eslogan.next(this.elements[index])       
      index<this.elements.length-1?index++:index=0; 
    })             
  }
}
