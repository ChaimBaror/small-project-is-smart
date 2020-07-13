import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public userser: UserService, private fb: FormBuilder) { }

  signfrom = this.fb.group({
    name: ['chaim', [Validators.required, Validators.minLength(2)]],
    email: ['', Validators.email],
    password: ['', [Validators.pattern("^[0-9]*$"), Validators.min(3), Validators.max(17)]],
    agree: [true]
  })


  currentUser: User[]


  ngOnInit(): void {
   this.currentUser = this.userser.getUser()
  }
  onSubmit() {

    //  this.currentUser.name= this.signfrom.controls.name.value;
    //  this.currentUser.email =this.signfrom.controls.email.value;
    //  this.currentUser.password= this.signfrom.controls.password.value;
    console.log(this.signfrom.value);
    console.log(this.signfrom.controls.name.value);
    this.userser.setUser(this.signfrom.controls.name.value,
      this.signfrom.controls.email.value,
      this.signfrom.controls.password.value)
  }

  signOut(){
    this.userser.signOut()
  }

}
