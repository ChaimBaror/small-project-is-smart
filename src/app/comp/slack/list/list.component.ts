import { Component, OnInit } from '@angular/core';
import { SherdService, userApi } from '../sherd.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchText = '';
  listuser=[]

  constructor(private usApi:SherdService) {
  
   }

  ngOnInit(): void {
    this.usApi.getUrl(this.usApi.userUrl)
    this.listuser=this.usApi.user;
    console.log(this.usApi.user,"this.usApi");
    console.log(this.listuser,"this.listuser");

  }

  click(id){
    console.log("click(id)",id);
    this.usApi.clickItmes(id)
    
  }
  clickname(name){
    console.log("click(search)",name);
    this.searchText=name
  
    
  }
 
 
}
