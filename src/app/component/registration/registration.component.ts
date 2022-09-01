import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  myForm = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]
  });

  constructor(private fb: FormBuilder, private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticate.subscribe((res : boolean) => {
      if(res){
        this.router.navigateByUrl('/dashboard')
      }
    })
  }

  onSubmit(myForm: any) {
   const {fname, lname, email, password} = myForm.value;
   this.authService.signUp(email, password,fname, lname);
  }

  reset() {
    this.myForm.reset();
    console.log("reset ++");
  }
}
