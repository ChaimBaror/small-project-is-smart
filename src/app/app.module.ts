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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorDirective,
    FromComponent,
    UniqueDirective,
    NavbarComponent,
    SignInComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
