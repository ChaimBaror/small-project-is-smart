import { Injectable } from '@angular/core';
import { User } from '../user';

// interface User {
//   u_id: number;
//   name: string;
//   email: string;
//   password: string;
//   img?: string;
// }

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  currentUser: User[] = []
  user: User = new User()
  cnutor: number = 1

  constructor() { }

  setUser(name, email, password) {
    console.log("this log ", name, email, password);

    this.user.u_id = this.cnutor++
    this.user.name = name
    this.user.email = email
    this.user.password = password
    // this.user.img=img
    this.currentUser.push(this.user)
    console.log("this is esspull", this.currentUser);

  }

  getUser(){
    return this.currentUser
  }
  signOut(){
    this.user = new User()
  }

}
