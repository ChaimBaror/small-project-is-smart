import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../store/reduer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  count$ :Observable<number>;

  constructor(private store :Store<{count :number}>) {
    this.count$ = store.pipe(select('count'))
   }
increment(){
  this.store.dispatch(increment())
}
decrement(){
  this.store.dispatch(decrement())
}
reset(){
  this.store.dispatch(reset())
}


}
