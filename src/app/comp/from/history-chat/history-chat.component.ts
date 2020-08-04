import { Component, OnInit } from '@angular/core';
import { LoginService, posts } from 'src/app/firestore/firestore/login.service';

@Component({
  selector: 'history-chat',
  templateUrl: './history-chat.component.html',
  styleUrls: ['./history-chat.component.css']
})
export class HistoryChatComponent implements OnInit {

  historyChat 

  constructor(private firestore : LoginService) { }

  ngOnInit(): void {
   this.historyChat = this.firestore.getCHAT()
  }

}
