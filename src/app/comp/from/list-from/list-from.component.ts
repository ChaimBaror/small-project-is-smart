import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Observable } from 'rxjs';
import { LoginService, Users } from 'src/app/firestore/firestore/login.service';

@Component({
  selector: 'app-list-from',
  templateUrl: './list-from.component.html',
  styleUrls: ['./list-from.component.css']
})
export class ListFromComponent implements OnInit {
  list$: Observable<string[]>
  currentUser:Users
  constructor(private service: ShareService,
    private Login : LoginService) { }

  ngOnInit(): void {
    this.list$ = this.service.getList()

    this.Login.getCurrentUser().subscribe(user =>
      this.currentUser=user )
  }





}
