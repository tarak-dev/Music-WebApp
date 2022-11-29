import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from 'src/app/Services/song.service';
import { AuthenticationService } from 'src/app/Services/authentication.service.spec';
import { Recommend } from 'src/app/recommend';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  isLoggedin:Boolean= false;
  recSongs: Recommend[]|undefined;

  constructor(private _songService: SongService, private http :HttpClient, private authService: AuthenticationService) { }

  ngOnInit() {
    
       this.isLoggedin= this.authService.isUserAuthenticated();
       this._songService.getRecommendedSongs().subscribe(data =>{
        this.recSongs= data;
      });
       console.log(this.recSongs);

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
    removeRecom(song:any){

    }
}
