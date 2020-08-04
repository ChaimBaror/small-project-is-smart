import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoginService ,posts } from 'src/app/firestore/firestore/login.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService   {


  list$: Subject<string[]> = new Subject();
  chatArr: string[] = [];

  constructor(private chatSerFIRE:LoginService) {

    //  this.chatSerFIRE.getCHAT()
   }


  addchat(chat: string) {
    // debugger
    this.chatArr.push(chat)
    this.list$.next(this.chatArr)
    console.log(" this.list$" ,this.list$);
 
    // setCHAT(text , id)
    
  }




  getList(): Observable<string[]> {
    return this.list$.asObservable()
  }
}
