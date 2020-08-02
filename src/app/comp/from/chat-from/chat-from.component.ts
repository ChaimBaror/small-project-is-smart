import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-from',
  templateUrl: './chat-from.component.html',
  styleUrls: ['./chat-from.component.css']
})
export class ChatFromComponent implements OnInit {

  constructor(private service : ShareService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  frominput = this.fb.group({
    
    chat: ['', [Validators.required, Validators.minLength(2)]],
 
  })
  onSubmit(){
    console.log("this work");
    this.addchat(this.frominput.controls.chat.value)
    this.frominput.reset();
  }


  addchat(text){
    this.service.addchat(text)
    console.log("text chat",text);

    
  }

}
