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
 arrayUser: User[] = []
  user: User = new User()
 
  cnutor: number = 100;

  constructor() { }

  setUser(name, email, password) {
    // console.log("this log ", name, email, password);
    this.cnutor++
    this.user.u_id =this.cnutor.toString()
    this.user.name = name
    this.user.email = email
    this.user.password = password
    // this.user.img=img
    // console.log(`%c ${this.user.name}` ,'color :blue');
    // console.log(`%c ${this.user.u_id}` ,'color :blue');
    this.arrayUser.push(this.user)
    // console.log("this is esspull", this.arrayUser);
  }

  getArrayUser(){
    return this.arrayUser
  }

  signOut(){
    // this.user = new User()
    // this.user=null
    this.user.u_id = ''
    this.user.name =''
    this.user.email = ''
    this.user.password = ''
    this.user.img = ''
    this.user.password = ''
    console.log(`%c ${ this.user}`,'color:yellow');
  }

}
