import { Component, OnInit } from '@angular/core';
import { Qushin } from 'src/app/class/qushin';
import { WizardValidators } from 'src/app/service/WizardValidators';

WizardValidators

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   points = [0, 1, 2, 3];

  arrayqushin: Qushin[] = [];
  qushin: Qushin = new Qushin();
  constructor() { }
  cunter :number = 0
  ngOnInit(): void {

  }

  newQushin() {
    this.qushin.id_q = ++this.cunter,
      this.qushin.q = "wath is number",
      this.qushin.anser = [
        { a: "one", istrue: true },
        { a: "is tow", istrue: false },
        { a: "is ont thre", istrue: false },
        { a: "is fore", istrue: false },
      ]
    this.arrayqushin.push(this.qushin)
    console.log(this.arrayqushin[0].anser);

    console.log(this.arrayqushin );
  }

  
  som(check:boolean){
    console.log((check));
    this.myFunction()
    
    if(check){
      alert("is very good")
     
    }
  }

   myFunction():void {
   this. points.sort(function(a, b)
   {return 0.5 - Math.random()});
    
  }


}
