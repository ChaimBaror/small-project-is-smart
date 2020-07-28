import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';


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

  itemsCollection 
  // : AngularFirestoreCollection<Item>;
  items : Observable<Item[]>;
 
  channel: Observable<any[]>;



  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    // let obs = from([1,2,3,4]).subscribe(l => l)
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
}
