import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = 'assets/Image/logo-infobeans-white.svg';
  imageAlt = 'Infobeans';
  isAuthenticated = false;
  user: any;
  shouldShow = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticate.subscribe((res : any) => {
      this.isAuthenticated = res;
      if(res){
        this.authService.currentUser.subscribe((res : any) => {
          this.user = res;
        })
      }
    })
  }

  clickMe() {
    this.router.navigateByUrl('/login');
  }
  toggle(){
    this.shouldShow = !this.shouldShow;
  }
  

  logoutData() {
    this.authService.isAuthenticate.next(false);
    this.authService.currentUser.next(null)
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
