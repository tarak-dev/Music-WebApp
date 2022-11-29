import { LoginComponent } from '../MyComponents/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import baseUrl from './helper';
import { loginData } from 'src/app/loginData';




@Injectable()
export class AuthenticationService {

    loginData: loginData = new loginData();
  constructor(private httpClient: HttpClient,private  router: Router) {
  }


  authenticateUser(data:loginData) {

    console.log("authuser"+data);
    return this.httpClient.post(`${baseUrl}login`,data);

  }



  isUserAuthenticated():boolean {
    let tokenStr=localStorage.getItem("loginData.email");
    let tokenStr2= localStorage.getItem('token');
    if(tokenStr || tokenStr2 != null ) {
      return true;
    }
   return false;
  }

  public  logout(): Boolean{
    localStorage.removeItem('token');
    localStorage.removeItem('loginData.email');
    return false;
  }


}
