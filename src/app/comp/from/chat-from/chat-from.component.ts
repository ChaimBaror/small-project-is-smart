import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-chat-from',
  templateUrl: './chat-from.component.html',
  styleUrls: ['./chat-from.component.css']
})
export class ChatFromComponent implements OnInit {

  constructor(private service : ShareService) { }

  ngOnInit(): void {
  }


  addchat(text){
    this.service.addchat(text)
    console.log("text chat",text);
    
  }

}
