import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { SignInComponent } from './comp/sign-in/sign-in.component';
import { MainComponent } from './comp/slack/main/main.component';
import { UserComponent } from './ngrx/user/user.component';
import { FirestoreComponent } from './firestore/firestore/firestore.component';
import { CounterComponent } from './ngrx/counter/counter.component';
import { MainFromComponent } from './comp/from/main-from/main-from.component';



const routes: Routes = [
  { path: 'slack', component: MainComponent },
  { path: 'from', component: MainFromComponent },
  { path: 'Sign', component: SignInComponent },
  { path: 'User', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'firestore', component: FirestoreComponent },
  { path: 'Counter', component: CounterComponent },
  
  // {
  //   path: 'home', component: HomeComponent,
  //   children: [
  //     { path: 'from', component: FromComponent },
  //     { path: 'contact', component: FromComponent },
  //     { path: '', redirectTo: 'home', pathMatch: 'full' }
  //   ]
  // },
  // { path: '', redirectTo: 'Sign', pathMatch: 'full' },
  // { path:'**' , component:NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
