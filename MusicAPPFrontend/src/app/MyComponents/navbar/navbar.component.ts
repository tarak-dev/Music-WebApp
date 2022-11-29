import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { AuthenticationService } from 'src/app/Services/authentication.service.spec';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoggedIn:Boolean=false;

  constructor(private router:Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserAuthenticated();
    console.log(this.isLoggedIn);
  }
  logoutt(){
   if(this.isLoggedIn){
    this.authService.logout();
    this.router.navigate(['/login']);

     }
else {
  Swal.fire('login first');
}
  
  }

}
