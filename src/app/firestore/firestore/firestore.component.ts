import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from './login.service';

export interface Item {
  name: string;
}



@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {

  readonly channels = '/channels/hsIlVYXj6jSfBnAWCTcX'

  // channelsCollection: AngularFirestoreCollection<any>;

  itemsCollection : AngularFirestoreCollection<Item>;
  items : Observable<Item[]>;
 
  channel: Observable<any[]>;

  loginForm:FormGroup= new FormGroup({
    name: new FormControl('',[Validators.required , Validators.minLength(2)]),
    mail: new FormControl('',[Validators.email , Validators.minLength(2)]),
    password: new FormControl('',[Validators.required , Validators.minLength(2)])
  })

  constructor(private afs: AngularFirestore,
    private loginService : LoginService) { }

  ngOnInit(): void {
 
    this.itemsCollection = this.afs.collection<Item>('/items');
    // this.channelsCollection = this.afs.collection<Item>(this.channels);
    // this.channel = this.channelsCollection.valueChanges()
    this.items = this.itemsCollection.valueChanges()
     this.items.subscribe(item =>{
      console.log( item)
      }
     )  
    console.log('items', this.items);
  }


  addItem(name) {
    this.itemsCollection.add({ name: name });
  }
  editItem() { }
  login(){
    
    console.log(this.loginForm.value)
    const loginData = this.loginForm.value
    this.loginService.login(loginData)
    
  }
}
