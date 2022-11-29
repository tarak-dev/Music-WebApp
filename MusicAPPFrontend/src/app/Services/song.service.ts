import { Injectable } from '@angular/core';
import { Recommend } from '../recommend'
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favourite } from '../favourite';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SongService {

  audioObj= new Audio;
Cards:any[]=[   
  {
    Title : "Hawayein",
    SungBY: "Arijit Singh",
     image: "assets/img/arijit2.jpg",
     url : "assets/audioFiles/hawayein.mp3"
     }, 
     {
      Title : "Banjara",
      SungBY: "Mohd Irfan" ,
       image: "assets/img/mohammed_irfan.jpeg",
       url : "assets/audioFiles/banjara.mp3"
       },
       {
        Title : "Safarnama",
        SungBY: "Lucky Ali" ,
         image: "assets/img/luckyAli.jpg",
         url : "assets/audioFiles/safarnama.mp3"
         }, 
         {
          Title : "Bahaara",
          SungBY: "Shreya Ghoshal" ,
           image: "assets/img/shreyaGhoshal.jpg",
           url : "assets/audioFiles/Bahara.mp3"
           },
            {
            Title : "Khudaa jane",
            SungBY: "KK" ,
             image: "assets/img/kk.jpg",
             url : "assets/audioFiles/KhudaJane.mp3"
             },
             {
              Title : "Tum Se Hi",
              SungBY: "Mohit Chauhan" ,
               image: "assets/img/mohitchauhan.jpg",
               url : "assets/audioFiles/TumSeHi.mp3"
               },
               {
                Title : "Tu Jane Naa",
                SungBY: "Atif Aslam" ,
                image: "assets/img/atifAslam.jpg",
               url : "assets/audioFiles/tujanena.mp3"
              },
               {
                Title : "Aj Din Chadheya",
                SungBY: " Rahat Fateh Ali Khan" ,
                 image: "assets/img/rfah.jpg",
                 url : "assets/audioFiles/AjjDinChadheya.mp3"
                 }
            ];
  constructor(private http: HttpClient) { 

  }
favouite: Favourite=new Favourite();
//private _url: string= "/assets/data/songs.json"; 
playAudio(url: string){
this.audioObj.src=url;
this.audioObj.load();
this.audioObj.play();
}
pauseAudio(url: string){
 this.audioObj.pause();
  }
  stopAudio(url: string){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
     }
   
getAllSongs(){
 return this.Cards;
 } 
  /*
  
getAllSongs(){
 return this.http.get<Card[]>(this._url);
 } */
 addtofavourite(favourite: Favourite): Observable<Favourite> {


  return this.http.post<Favourite>(`http://localhost:8280/favourites/addtofav`,favourite);
}

 getFavouriteSongs(): Observable<Array<Favourite>> {
  return this.http.get<Array<Favourite>>(`http://localhost:8280/favourites/getallfav`);

 }


//recommend
addtorecommendation(addrecommendation:Recommend): Observable<Recommend> {


  return this.http.post<Recommend>(`http://localhost:8280/recommend/addtorecommend`,addrecommendation);
}

getRecommendedSongs(): Observable<Array<Recommend>> {
  return this.http.get<Array<Recommend>>('http://localhost:8280/recommend/getallrecommend');
}
}
