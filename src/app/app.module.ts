import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './directive/color.directive';
import { FromComponent } from './comp/from/from.component';
import { UniqueDirective } from './directive/unique.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './comp/sign-in/sign-in.component';
import { MainComponent } from './comp/slack/main/main.component';
import { ChatComponent } from './comp/slack/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './module/matrial/matrial.module';
import { ListComponent } from './comp/slack/list/list.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorDirective,
    FromComponent,
    UniqueDirective,
    NavbarComponent,
    SignInComponent,
    MainComponent,
    ChatComponent,
    ListComponent,
    FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatrialModule,
    FormsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
