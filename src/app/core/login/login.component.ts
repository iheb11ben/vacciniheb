import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user :User =    {fullName:'iheb ben mansour', email: 'issam@gmail.com',password:'12345',role: 'admin',status:true};
  mail !: string;
  password !:string;
  date  =new Date();
  str =" Bonjour";
  constructor(private authServ:UserService) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }
  getUserByMail(email: string){
    console.log(email)
    if (this.authServ.getUser(email)==undefined){
      console.log('Email not found');
      
    }
    else{
      this.user=this.authServ.getUser(email);
      this.isLogin(this.password);
    }

  }
  isLogin(pwd: string) {
    if(pwd === this.user.password){
      console.log('login success');
      localStorage.setItem('token', this.user.fullName);
      localStorage.setItem('role', this.user.role)

      
    }
    else{
      console.log('login error');
      
    }
  }

}