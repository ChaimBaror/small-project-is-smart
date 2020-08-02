import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFromComponent } from './main-from/main-from.component';
import { ListFromComponent } from './list-from/list-from.component';
import { ChatFromComponent } from './chat-from/chat-from.component';
import { UserFromComponent } from './user-from/user-from.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MainFromComponent,
    ListFromComponent,
    ChatFromComponent,
    UserFromComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FromModule { }
