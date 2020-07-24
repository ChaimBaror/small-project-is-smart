import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

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
  post: postApi[][] = []
  idPost$: Subject<postApi> = new Subject();
  // idPost: postApi
  userUrl = "https://5f1454452710570016b37e52.mockapi.io/api/user"
  postUrl = "https://5f1454452710570016b37e52.mockapi.io/api/post"
  constructor(private http: HttpClient) { 
   this.getpostUrl()
  }

  getUrl(url) {
    this.http.get<userApi>(url).subscribe(user =>
      this.user.push(user))
    console.log("this.user", this.user);
  }

  getpostUrl() {
    this.http.get<postApi[]>(this.postUrl).subscribe(api =>
      this.post.push(api))
    console.log("this.posts", this.post);
  }



  clickItmes(id) {
    // this.getpostUrl()
    console.log(id);
    console.log(`%c ${this.post}`,`color:red`);
    console.log(`%c ${this.post[0]}`,`color : yellow`);
    
    for (let i = 0; i <this.post[0].length; i++) {
      if (this.post[0][i].id == id){
      console.log("this all post ",this.post);
      
        this.idPost$.next(this.post[0][i])
        console.log("this is new post",this.idPost$);
        console.log(`%c ${this.idPost$}`,`color:red`);
      // this.getUrl(this.postUrl)
      }
    }
  }
  getList(): Observable<postApi> {
    return this.idPost$.asObservable()
  }
}
