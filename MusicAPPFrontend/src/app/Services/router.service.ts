import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }


  routeToAlbumView() {
    this.router.navigate(['dashboard','AlbumSong']);
  }

  routeToArtistView() {
    this.router.navigate(['dashboard','ArtistSong']);
  }
  routeToHome(){
    this.router.navigate(['home']);
  }
}
