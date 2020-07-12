import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
interface RootObject {
  response_code: number;
  results: Result[];
}

interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
@Injectable({
  providedIn: 'root'
})


export class GetService {

  url = {
  api :'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple'
  }

  constructor(private http :HttpClient) { }
   getdata(url): Observable<Result>{
      return this.http.get<Result>(url)
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

