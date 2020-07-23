import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface userApi {
  id: string,
  fname: string,
  lname: string,
  company: string,
  phone: string
}
export interface postApi {
  id: string,
  post: string,
  company: string,
  image: string
}
@Injectable({
  providedIn: 'root'
})

export class SherdService {

  user: userApi[] = []
  post:postApi[]=[]
  idPost:postApi
  userUrl = "https://5f1454452710570016b37e52.mockapi.io/api/user"
  postUrl = "https://5f1454452710570016b37e52.mockapi.io/api/post"
  constructor(private http: HttpClient) { }

  getUrl(url) {
    this.http.get<userApi>(url).subscribe(user =>
      this.user.push(user))
    console.log("this.user", this.user);
  }

  getpostUrl() {
    this.http.get<postApi>(this.postUrl).subscribe(api =>
      this.post.push(api))
    console.log("this.user", this.post);
  }


  clickItmes(id) {
    this.getpostUrl()
    console.log(id);
  if (this.post[0].id==id)
  this.idPost=this.post[0]
    // this.getUrl(this.postUrl)

  }


}
