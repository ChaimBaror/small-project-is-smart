import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface userApi {
  id: string,
  fname: string,
  lname: string,
  company: string,
  phone: string
}

@Injectable({
  providedIn: 'root'
})

export class SherdService {

  user: userApi[] = []

  userUrl = "https://5f1454452710570016b37e52.mockapi.io/api/user"
  postUrl = "https://5f1454452710570016b37e52.mockapi.io/api/post"
  constructor(private http: HttpClient) {}

    getUrl(url){
    this.http.get<userApi>(url).subscribe(user =>
      this.user.push(user))
    console.log("this.user", this.user);
  }


  clickItmes(id) {
    console.log(id);
    // this.getUrl(this.postUrl)

  }

  
}
