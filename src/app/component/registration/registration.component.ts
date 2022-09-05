import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  hideConfirm = true;
  submitted = false;
  isValid = false;
  myForm = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('([a-zA-Z]{3,30}\s*)+')]],
    lname: ['', [Validators.required, Validators.pattern('([a-zA-Z]{3,30}\s*)+')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    confirmPassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.isAuthenticate.subscribe((res: boolean) => {
      if (res) {
        this.router.navigateByUrl('/login')
      }
    })
  }

  onSubmit(myForm: any) {
    this.submitted = true;
    const { fname, lname, email, password } = myForm.value;
    this.authService.signUp(email, password, fname, lname);
    if (this.myForm.valid) {
      this.myForm.reset();
      this._snackBar.open('Registered Sucessfully', 'X',
        {
          duration: 5000,
        });
      // alert('Registration Succesful!!');
      console.log("YUUU"+this.myForm.valid);
    }
    else {
      // alert('Form Submitted Failed!!!');
    }
  }

  confirmPassword() {
    const password = this.myForm.value.password;
    const email = this.myForm.value.email;
    const confirmPassword = this.myForm.value.confirmPassword;
    console.log(password === confirmPassword);
    
    if(confirmPassword !== password){
      window.alert("Password match nahi kar rhe he ramesh!!!")
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  reset() {
    this.myForm.reset();
    console.log("reset ++");
  }
}
