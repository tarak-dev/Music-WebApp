import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import {FavouritesComponent} from './MyComponents/favourites/favourites.component'
import{RecommendedComponent} from './MyComponents/recommended/recommended.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes=[
  {
    //by default we are opening dashboard
        path:'',
        redirectTo:'Home',
        pathMatch:'full'
  },
  {
    
    path:'Home',//path is http:localhost:4200/home
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'favourites',//path is http:localhost:4200/favourites
    component:FavouritesComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },{
  path:'Recommend',//path is http:localhost:4200/recommend
  component:RecommendedComponent,
  pathMatch:'full',
},

{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RecommendedComponent, FavouritesComponent]

