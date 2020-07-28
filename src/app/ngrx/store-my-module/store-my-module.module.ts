import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/reduer';
import { CounterComponent } from '../counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'





@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({maxAge:25})
    
  ]
})
export class StoreMyModuleModule { }
