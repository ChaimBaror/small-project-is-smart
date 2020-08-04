import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService, Users } from 'src/app/firestore/firestore/login.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public serUser: UserService, private fb: FormBuilder,private login :LoginService) { }
  // User: Users={name : "chaim" ,img: "https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"};

  signfrom = this.fb.group({
    
    name: ['', [Validators.required, Validators.minLength(2)]],
    mail: ['', Validators.email ],
    password: ['', [Validators.required, Validators.min(4)]],
    agree: [true],
    img : ['https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg']
  })


 public currentUser: User;


  ngOnInit(): void {
    this.currentUser = this.serUser.user
    console.log(`%c ${this.currentUser}`,'color:red');
  }
  onSubmit() {
    console.log(this.signfrom.value);
    console.log(this.signfrom.controls.name.value);
    this.serUser.setUser(
      this.signfrom.controls.name.value,
      this.signfrom.controls.mail.value,
      this.signfrom.controls.password.value
    )

    this.login.login(this.signfrom.value)
    this.signfrom.reset()
    
  }
  signOut() {
    this.serUser.signOut()
    this.currentUser = this.serUser.user
    console.log(`%c ${this.currentUser}`,'color:blue');
  }

}
