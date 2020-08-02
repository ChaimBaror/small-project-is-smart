import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-from',
  templateUrl: './list-from.component.html',
  styleUrls: ['./list-from.component.css']
})
export class ListFromComponent implements OnInit {
  list$: Observable<string[]>
  constructor(private service: ShareService) { }

  ngOnInit(): void {
    this.list$ = this.service.getList()
  }

}
