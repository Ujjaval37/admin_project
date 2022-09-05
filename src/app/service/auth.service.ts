import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { User } from "../model/user.model"


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = new BehaviorSubject<boolean>(false);
  currentUser = new BehaviorSubject<any>(null);

  constructor(private userService: UserService) { }

  verifyEmail(email : string) : boolean {
    const userExist =  this.userService.usersData.find((user : User) => user.email == email);
    return userExist ? true : false;
  }

  changePassword(password : string, email : string)  {
    const userPasswordToBeChanged = this.userService.usersData.find((user : User ) => user.email === email);
    const filteredUsers = this.userService.usersData.filter((user : User) => user.email !== email);
    if(userPasswordToBeChanged){
      userPasswordToBeChanged.password = password;
    }
    if(userPasswordToBeChanged && filteredUsers){
      this.userService.usersData = [...filteredUsers, userPasswordToBeChanged]
    }
  }

  getUserFromStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      this.currentUser.next(JSON.parse(user));
      this.isAuthenticate.next(true);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    const isUserExist = this.userService.usersData.find((user: User) => {
      if (user.email === email && user.password === password) {
        return true;
      }
      return false;
    })
    localStorage.setItem("user", JSON.stringify(isUserExist));
    if (isUserExist) {
      this.currentUser.next(isUserExist);
    }
    console.log(isUserExist);
    this.isAuthenticate.next(isUserExist !== undefined ? true : false);
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
      this.isAuthenticate.next(false);
      // localStorage.setItem("user", JSON.stringify(isUserExist));
      this.userService.usersData.push(newUser);
      // this.currentUser.next(newUser);
      // console.log({ newArray: this.userService.usersData })
    }
  }
}
