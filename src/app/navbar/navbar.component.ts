import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serUser: UserService) { }
  user:string
  ngOnInit(): void {
this.user=this.serUser.user.name
  }

  signOut(){
    this.user='';
    this.serUser.signOut()
  }

}
