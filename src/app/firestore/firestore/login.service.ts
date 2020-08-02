import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface ISignup {
  uid?: string;
  name?: string;
  mail?: string;
  password?: string;
  img?:string;
}
// u_id: string;
// name: string;
// email: string;
// password:string;
// img?: string;

@Injectable({
  providedIn: 'root'
})
export class LoginService {


 readonly usersChatPATH = '/items'
  readonly usersPATH = '/Users'
  usersCollection: AngularFirestoreCollection
  chatCollection:AngularFirestoreCollection
  user:ISignup
  users$: Observable<ISignup[]>
  // chat$

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection(this.usersPATH)
    this.users$ = this.usersCollection.valueChanges()

    this.chatCollection = this.afs.collection(this.usersChatPATH)
    // this.chat$ = this.chatCollection.valueChanges()
  }
getCHAT(){
  return  this.usersCollection.doc(`Users/${this.user.uid}`).valueChanges()
}
setCHAT(text ){
  this.usersCollection.doc(`Users/${this.user.uid}`).set(text);
}

  login(data: ISignup) {

    data.uid = this.afs.createId();
    console.log(`%c ${data.mail, data.name}`, `color : red`);

    this.usersCollection.add(data)

    this.afs.collection(this.usersPATH, ref => ref.where('name', '==', data.name)
      .orderBy('name')
    )
      .valueChanges({ idField: 'id' })
      this.user=data
  }

  edit(added,removed){
     this.usersCollection.valueChanges([added, removed]);
  }


  loginUp(data: ISignup) {
    // console.log(`%c ${data.mail, data.name}`, `color : red`);

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
   this.user=signupData
    this.usersCollection.add(signupData)
  }

  getCurrentUser() {
    //  return this.store.pipe(select(currentUserSelector)) 
  }



}
