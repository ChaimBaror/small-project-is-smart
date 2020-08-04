import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';


export interface Users {
  uid?: string;
  name?: string;
  mail?: string;
  password?: string;
  img?:string;
  agree?:boolean;
}


export interface posts {
address:string
addressee:string
chat:string
date 
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 


 readonly usersChatPATH = '/items'
  readonly usersPATH = '/Users'
  usersCollection: AngularFirestoreCollection
  chatCollection:AngularFirestoreCollection

  currentUser$: BehaviorSubject<Users> = new BehaviorSubject({name : "chaim", uid:"100" ,img: "https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"});

  currentUser:Users
  users$: Observable<Users[]>
  // chat$

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection(this.usersPATH)
    this.users$ = this.usersCollection.valueChanges()

    this.chatCollection = this.afs.collection('/post')
    // this.chat$ = this.chatCollection.valueChanges()

    console.log(`%c ${this.currentUser}`,`color : red`);
  }
  getCurrentUser(): Observable<Users> {
    return this.currentUser$.asObservable()
  }

  // signOut() { 
  //   this.currentUser.uid = ''
  //   this.currentUser.name =''
  //   this.currentUser.mail = ''
  //   this.currentUser.password = ''
  //   this.currentUser.img = ''
  //   this.currentUser.password = ''
  //   console.log(`%c ${ this.currentUser}`,'color:yellow');
  // }
getCHAT(){
  return this.chatCollection.valueChanges()
}


addCHAT(posts:posts ){
  this.chatCollection.add(posts)
}

  login(data: Users) {

    data.uid = this.afs.createId();
    console.log(`%c ${data.mail, data.name}`, `color : red`);

    this.usersCollection.add(data)

    // this.afs.collection(this.usersPATH, ref => ref.where('name', '==' , data.name)
    //   .orderBy('name')
    // )
    //   .valueChanges({ idField: 'id' })
    //   this.currentUser=data

      this.currentUser$.next(data)
  }

  
  loginUp(data: Users) {
    // console.log(`%c ${data.mail, data.name}`, `color : red`);
    this.afs.collection(this.usersPATH, ref => ref.where('password', '==', data.password)
      .where('mail', '==', data.mail)
      .orderBy('name')).valueChanges({ idField: 'id' }).subscribe(console.log)}

  signup(signupData: Users) {
    this.currentUser$.next(signupData)
    this.usersCollection.add(signupData)
    console.log(`%c ${signupData}`,`color : red`);
    
  }

  selectUser(selectUser:Users){
    this.currentUser$.next(selectUser)
  }
}
