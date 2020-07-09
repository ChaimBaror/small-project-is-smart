import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http :HttpClient) { }
   getdata(){
      this.http.get
  }

  

  // var unirest = require("unirest");

  // this.req = this.http.get( "https://webknox-trivia-knowledge-facts-v1.p.rapidapi.com/trivia/random");
  
  // req.headers({
  //   "x-rapidapi-host": "webknox-trivia-knowledge-facts-v1.p.rapidapi.com",
  //   "x-rapidapi-key": "375fc60220msh606089a7ff4e563p19365bjsn9a9fa091853e",
  //   "useQueryString": true
  // });
  
  
  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);
  
  //   console.log(res.body);
  // });

}




		// "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
		// "x-rapidapi-key": "375fc60220msh606089a7ff4e563p19365bjsn9a9fa091853e",

