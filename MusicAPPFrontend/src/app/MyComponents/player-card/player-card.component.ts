;import { Component, OnInit, Output } from '@angular/core';
import { SongService } from 'src/app/Services/song.service';
import { RouterService } from 'src/app/Services/router.service';
import Swal from 'sweetalert2';
import { Favourite} from 'src/app/favourite';
import { Recommend } from 'src/app/recommend';
import { loginData } from 'src/app/loginData';

@Output()
@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
 public songs:any=[];
 favSongs: Favourite= new Favourite();
 isLoggedin: Boolean= false;
 favFlag:number=0;
 checkFav:any;

 recSongs:Recommend= new Recommend();
 recflag:number=0;
 checkrec:any;
  constructor(private _songService:SongService,private routerservice:RouterService,) {
  }

  ngOnInit(): void {
  this.songs = this._songService.getAllSongs();
    /*.subscribe(data=> this.songs = data);*/

          
    if(JSON.parse(localStorage.getItem("email")as any)===null){
      
      this.isLoggedin=false;

    }
    else
    {
      this.isLoggedin=true;
    }
      
  }

  addToFav(song:any){
    if(JSON.parse(localStorage.getItem("token") as any)===null){
      Swal.fire('Unauthorized',"Login to access this feature", "error");
    }
    else{
      this.favFlag=0;
      this.favSongs.email=JSON.parse(localStorage.getItem("loginData.email")as any);
      this.favSongs.title=song.Title;
      this.favSongs.image=song.image;
      this.favSongs.sungBy=song.SungBY;

    let strr= localStorage.getItem('loginData.email');
        if(strr==this.favSongs.email)
        {
            this.favFlag=1;
            console.log(this.favFlag);
        }
        

      console.log(this.favFlag);
      if(this.favFlag==0){
        this._songService.addtofavourite(this.favSongs).subscribe(
          data=>{
            
            console.log("add");
            console.log(data);
            
          },error=>{
            console.error();
          }
        );
        Swal.fire('added..','Added to favourites','success');
      }
      else{
        Swal.fire('already added..','Added to favourites','success');
      }

    }

 
  }

  addToRecommend(song:any){
      
    if(JSON.parse(localStorage.getItem("token") as any)===null){
      //populate the message box
      Swal.fire('Unauthorized',"Login to access this feature", "error");
    }
    else{
      this.recflag=0;
      this.recSongs.email=JSON.parse(localStorage.getItem("loginData.email")as any);
      this.recSongs.title=song.Title;
      this.recSongs.image=song.image;
      this.recSongs.sungBy=song.SungBY;

     let element = localStorage.getItem('loginData.email'); 


        if(element==this.recSongs.email)
        {
            this.recflag=1;
            console.log(this.recflag);
        }
        
   
      console.log("out"+this.recflag);
      if(this.recflag==0){
        
        this._songService.addtorecommendation(this.recSongs).subscribe(
          data=>{
            
           
            console.log("add");
            console.log(data);
           
            
          },error=>{
            console.error();
          }
        );

        Swal.fire('added..','Added to Recommendation','success');
      }
      else{
        Swal.fire('already added..','Added to favourites','success');
      }

    }

  }

//SONG 
  PlayAudio:boolean = false;
 
  playSong(url:string){
 this._songService.playAudio(url);
 
 }
 pauseSong(url:string){
  this._songService.pauseAudio(url);
 
 }
stopSong(url:string){
  this._songService.stopAudio(url);

 }

}
