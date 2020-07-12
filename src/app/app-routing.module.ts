import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromComponent } from './comp/from/from.component';
import { HomeComponent } from './comp/home/home.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: []
  },
  { path: 'from', component: FromComponent },
  { path: 'contact', component: FromComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path:'**' , component:NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
