import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './directive/color.directive';
import { FromComponent } from './comp/from/from.component';
import { UniqueDirective } from './directive/unique.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorDirective,
    FromComponent,
    UniqueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }