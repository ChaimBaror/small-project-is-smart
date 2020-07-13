import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromComponent } from './comp/from/from.component';
import { HomeComponent } from './comp/home/home.component';
import { SignInComponent } from './comp/sign-in/sign-in.component';


const routes: Routes = []
//  { path: 'Sign', component: SignInComponent},
//   {
    
//     path: 'home', component: HomeComponent,
//     children: []
//   },
//   { path: 'from', component: FromComponent },
//   { path: 'contact', component: FromComponent },

//   { path: '', redirectTo: 'Sign', pathMatch: 'full' },
//   // { path:'**' , component:NotFoundComponent},
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
