import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticate.subscribe((res : any) => {
      this.isAuthenticated = res;
      this.user = this.authService.currentUser;
      console.log(this.user)
    })
  }

  logoutData() {
    this.authService.isAuthenticate.next(false);
    this.router.navigateByUrl('/logincomponent');
  }

}
