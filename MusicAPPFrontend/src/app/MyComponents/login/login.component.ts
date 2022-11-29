
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/Services/authentication.service.spec';
import { RouterService } from 'src/app/Services/router.service';
import { loginData } from 'src/app/loginData';
import { User } from 'src/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData:loginData =new loginData();
  constructor(private authService: AuthenticationService, private router: Router) { }


  ngOnInit(): void {
  }
  signIn(){
    console.log(this.loginData);
    if(this.loginData.email== ' ' || this.loginData.email == null){
      alert('name is required!');
      return;
    }
    if(this.loginData.password == '' || this.loginData.password == null){
      alert('Password is required!');
      return;
    }
    else{
      this.authService.authenticateUser(this.loginData).subscribe(
        (response:any)=>{
             Swal.fire('Welcome', 'Login Successful', 'success');
             console.log(response.token);
             localStorage.setItem("token",JSON.stringify(response.token));
             localStorage.setItem("loginData.email", JSON.stringify(this.loginData.email));
             window.location.href="/Home";
    
          },
          (error: any)=>{
            console.log(error);
            alert('Try Again');
          }
      )
    }
  }



  



}
