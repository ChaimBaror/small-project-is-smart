import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor() { }
  condition:boolean=true
  ngOnInit(): void {
  }
add(){
  this.condition=! this.condition
}
}
