import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { fullName: 'iheb ben mansour', email: 'iheb@gmail.com', password: '1234', role: 'admin', status: true },
  ]
  user!: User;
  token!: string | null;
  constructor(private _route: Router) { }

  getUser(mail: string): User | any {
    return this.users.find(u => u.email == mail)
  } 
  login(): boolean {
    this.token = localStorage.getItem('token')
    if (this.token !== null) {
      return true;
    }
    else {
      this._route.navigate(['/']);
      return false
    }
  }

}

