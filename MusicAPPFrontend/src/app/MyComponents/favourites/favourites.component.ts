import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/Services/song.service';
import { AuthenticationService } from 'src/app/Services/authentication.service.spec';
import { HttpClient } from '@angular/common/http';
import { Favourite } from 'src/app/favourite';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favSongs: Favourite[] | undefined;
  isLoggedin:Boolean= false ;
  
  constructor(private _songService:SongService, private http:HttpClient, private authService:AuthenticationService) { }

  ngOnInit()  {
    // this.favSongs = this._songService.getFavouriteSongs();

     this.isLoggedin= this.authService.isUserAuthenticated();
    // this.favSongs=   this._songService.getFavouriteSongs();
  
   // this.favSongs= this.http.get<Array<Favourite>>(`http://localhost:8280/favourites/getallfav`)
   
    this._songService.getFavouriteSongs().subscribe(data =>{
      this.favSongs= data;
    });
  }
 
  playSong(url:string){
    this._songService.playAudio(url);
    
    }
    pauseSong(url:string){
     this._songService.pauseAudio(url);
    
    }
   stopSong(url:string){
     this._songService.stopAudio(url);
   
    }
    
    removeFav(song:any){
      console.log(song);
    }
}
