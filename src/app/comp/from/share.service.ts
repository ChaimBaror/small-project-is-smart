import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  list$: Subject<string[]> = new Subject();
  chatArr: string[] = [];
  constructor() { }


  addchat(chat: string) {
    // debugger
    this.chatArr.push(chat)
    this.list$.next(this.chatArr)
    console.log(" this.list$" ,this.list$);
    
  }


  getList(): Observable<string[]> {
    return this.list$.asObservable()
  }
}
