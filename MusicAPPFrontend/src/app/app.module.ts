import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerCardComponent } from './MyComponents/player-card/player-card.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { FooterComponent } from './MyComponents/footer/footer.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { RecommendedComponent } from './MyComponents/recommended/recommended.component';
import { FavouritesComponent } from './MyComponents/favourites/favourites.component';
import { SongService } from './Services/song.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { routingComponents } from './app-routing.module';
import { RouterService } from './Services/router.service';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './Services/authentication.service.spec';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RecommendedComponent,
    FavouritesComponent,
    routingComponents,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [SongService,RouterService,AuthenticationService,UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
