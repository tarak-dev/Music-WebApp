import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  public user={
    name:'',
    email:'',
    password:'',
  };

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.name == '' || this.user.name == null){
      alert('Username is required!');
      return;
    }
    if(this.user.email == '' || this.user.email == null){
      alert('Email is required!');
      return;
    }
    if(this.user.password == '' || this.user.password == null){
      alert('Password is required!');
      return;
    }
else{
// Add user :userService
this.userService.addUser(this.user).subscribe(
  //success
  (data: any)=>{
    console.log(data);

     Swal.fire('Welcome', 'User is registered', 'success');
  },
  (error: any)=>{
    console.log(error);
    alert('Try Again');
  }
)
}
  }

}
