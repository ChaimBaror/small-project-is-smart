import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[]
  
userUrl : "https://5f1454452710570016b37e52.mockapi.io/api/user"

  constructor(private http : HttpClient) {

   }
fetchUser(){
this.http.get<User[]>(this.userUrl).subscribe(user => 
  this.users=user )
}
}
