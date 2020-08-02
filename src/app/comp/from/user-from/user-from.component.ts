import { Component, OnInit } from '@angular/core';
import { LoginService, ISignup } from 'src/app/firestore/firestore/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {


  listuser = []
  condition = true
  conu: number
  userfirestore$: Observable<ISignup[]>

  constructor(private fire: LoginService ) {}
    clickEdit(add){
      console.log(`%c ${add}`,`color : blue`);
      
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

  conditions() {
    this.condition = !this.condition
  }


  ngOnInit(): void {

    this.userfirestore$ = this.fire.users$
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
