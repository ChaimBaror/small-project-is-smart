import { Component, OnInit } from '@angular/core';
import { SherdService, userApi } from '../sherd.service';
import { LoginService, Users } from 'src/app/firestore/firestore/login.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchText = '';
  listuser = []
  condition = true
  conu: number
  thislist=true
  userfirestore$: Observable<Users[]>

  constructor(private usApi: SherdService,private fire: LoginService
    ) {}
    clickdelete(user){
      console.log(`%c ${user.uid}`,`color : blue`);
      this.fire.usersCollection.doc(user.uid).delete()
      // this.fire.edit(add,rov)
    }


   

  conditionsfun() {
    this.conu = 30
    let myInterval = setInterval(() => {
      this.condition = !this.condition
      this.conu = this.conu - 1
    }, 100);

    
    setTimeout(() => {
      clearInterval(myInterval)
      this.condition = true
    }, 3000)
  }


  usershow(){
      this.thislist= !this.thislist
  }
  userAPIshow(){
    this.thislist=true
  }
  userfirestoreshow(){
    this.thislist=false
  }
  conditions() {
    this.condition = !this.condition
  }


  ngOnInit(): void {
    this.usApi.getUrl(this.usApi.userUrl)
    this.listuser = this.usApi.user;
    console.log(this.usApi.user, "this.usApi");
    console.log(this.listuser, "this.listuser");

    this.userfirestore$ = this.fire.users$
  }

  click(id) {
    console.log("click(id) this ih new post of user", id);
    this.usApi.clickItmes(id)
    // this.deleteuser(id)
  }


  clickname(name) {
    console.log("click(search)", name);
    this.searchText = name
    // this.deleteuser(name)
  }

  clicksom(suo) {
    console.log("click(suo)", suo);
    

    // this.deleteuser(name)
  }

  deleteuser(id) {
    let index
    for (let i = 0; i < this.listuser[0].length; i++) {
      if (this.listuser[0][i].id == id)
        index = i
    }
    this.listuser[0].splice(index, 1);
    console.log();

    console.log("delete user", index, this.listuser[0]);

  }

}
