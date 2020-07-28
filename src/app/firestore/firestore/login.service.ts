import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface ISignup {
  id?: string;
  name?: string;
  mail?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
countId= 0;
  readonly usersPATH = '/Users'
  usersCollection: AngularFirestoreCollection

  users$: Observable<ISignup[]>

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection(this.usersPATH)
    this.users$ = this.usersCollection.valueChanges()
  }


  login(data: ISignup) {
    data.id = this.afs.createId();
   
    
    console.log(`%c ${data.mail, data.name}`, `color : red`);
    // data.id= (++this.countId).toString()

    this.usersCollection.add(data)

    this.afs.collection(this.usersPATH, ref => ref.where('name', '==', data.name)
      .orderBy('name')
    )
      .valueChanges({ idField: 'id' })

  }



  loginUp(data: ISignup) {
    console.log(`%c ${data.mail, data.name}`, `color : red`);

    this.afs.collection(this.usersPATH, ref => ref.where('password', '==', data.password)
      .where('mail', '==', data.mail)
      .orderBy('name')
    )
      .valueChanges({ idField: 'id' })
      // .pipe(
      //     tap(console.log),
      //     tap( (res)=> this.store.dispatch( loginData({loginData:res[0]})) )
      // )
      .subscribe(console.log)
  }

  logout() {
    //  this.store.dispatch( logoutAction({id:''}))
  }

  signup(signupData: ISignup) {
    this.usersCollection.add(signupData)
  }

  getCurrentUser() {
    //  return this.store.pipe(select(currentUserSelector)) 
  }



}
