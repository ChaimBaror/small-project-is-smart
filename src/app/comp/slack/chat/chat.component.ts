import { Component, OnInit } from '@angular/core';
import { SherdService, postApi } from '../sherd.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userPost$: Observable<postApi>

  constructor(private serHttp: SherdService) { }

  ngOnInit(): void {
    this.userPost$ = this.serHttp.getList()
  
    console.log("this.userPost$", this.userPost$);

  }

}
