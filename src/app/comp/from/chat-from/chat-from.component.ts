import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { FormBuilder, Validators } from '@angular/forms';
import { posts, LoginService } from 'src/app/firestore/firestore/login.service';

@Component({
  selector: 'app-chat-from',
  templateUrl: './chat-from.component.html',
  styleUrls: ['./chat-from.component.css']
})
export class ChatFromComponent implements OnInit {

  currentUser
  constructor(private service: ShareService, private fb: FormBuilder,private firestore : LoginService) { }

  ngOnInit(): void {
  }


  frominput = this.fb.group({

    chat: ['', [Validators.required, Validators.minLength(2)]],

  })
  onSubmit() {
    console.log("this work");
    this.addchat(this.frominput.controls.chat.value)
    this.frominput.reset();
  }


  addchat(text) {
    this.service.addchat(text)
    console.log("text chat", text);

   this.addToFirePost(text)
  }

  addToFirePost(posts) {
   this.currentUser
    this.firestore.currentUser$.subscribe(user=>
      this.currentUser = user)

    let chat: posts = {
      address: this.currentUser.name,
      addressee: "",
      chat: posts,
      date: new Date()
      }
      this.firestore.addCHAT(chat)

      console.log("chat post " , chat);
      
    }



    // address= "",
    // addressee="",
    // chat= posts,
    // date = new Date(),
  }


