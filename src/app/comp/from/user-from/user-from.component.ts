import { Component, OnInit } from '@angular/core';
import { LoginService, Users } from 'src/app/firestore/firestore/login.service';
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
  currentUser:Users;
  userfirestore$: Observable<Users[]>

  constructor(private Login: LoginService ) {}
    selackUset(user){
      console.log(`%c ${user}`,`color : blue`);
      console.log(`%c ${user.name}`,`color : blue`);
      console.log(`%c ${user.uid}`,`color : red`);
      console.log(`%c ${user.mail}`,`color : blue`);
      this.Login.selectUser(user)
      
      
      // this.fire.edit(add,rov)
    }

  // conditionsfun() {
  //   this.conu = 30
  //   let myInterval = setInterval(() => {
  //     this.condition = !this.condition
  //     this.conu = this.conu - 1
  //   }, 100);

    
  //   setTimeout(() => {
  //     clearInterval(myInterval)
  //     this.condition = true
  //   }, 3000)
  // }

  // conditions() {
  //   this.condition = !this.condition
  // }


  ngOnInit(): void {

    this.userfirestore$ = this.Login.users$
    console.log(this.userfirestore$);

    this.Login.getCurrentUser().subscribe(user =>
      this.currentUser= {...user} )
    
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

  usersImg = [
    'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
    'https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg',
    'https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg',
    'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
 
]

}
