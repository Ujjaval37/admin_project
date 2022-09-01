import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { User } from "../model/user.model"


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate =  new BehaviorSubject<boolean>(false);
  currentUser: any; 

  constructor(private userService: UserService) { }

  login(email: string, password: string): Observable<boolean> {
    const isUserExist = this.userService.usersData.find((user: User) => {
      if (user.email === email && user.password === password) {
        return true;
      }
      return false;
    })
    
    if(isUserExist){
      this.currentUser = isUserExist;
    }
    console.log(isUserExist);
    this.isAuthenticate.next( isUserExist !== undefined ? true : false);
    return of(this.isAuthenticate.value);
  }

  signUp(email: string, password: string, firstname: string, lastname: string) {
    const isUserExist = this.userService.usersData.find((user: User) => user.email === email ? true : false);
    const newId = this.userService.usersData.length + 1;
    const newUser = {
      id: newId,
      email,
      password,
      firstname,
      lastname,
      device: [],
      type: "User",
    }
    console.log({ oldArray: this.userService.usersData })
    if (isUserExist === undefined) {
      this.isAuthenticate.next(true);
      this.userService.usersData.push(newUser);
      this.currentUser = newUser;
      console.log({ newArray: this.userService.usersData })
    }
  }
}
