import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  hide = true;
  hideConfirm = true;
  shouldShow = false;
  isValid = false;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]

    });

    // this.myForm.controls['confirmPassword'].valueChanges(res => this.confirmPassword())
  }

  // onSubmit(myForm: any) {
  //   console.log(this.myForm.value);
  // }

  emailVerification() {
    console.log("sdfxgchjk");

    const email = this.myForm.value.email;
    if (email) {
      this.shouldShow = this.authService.verifyEmail(email);
    }
  }

  confirmPassword() {
    const password = this.myForm.value.password;
    const email = this.myForm.value.email;
    const confirmPassword = this.myForm.value.confirmPassword;
    console.log(password === confirmPassword);

    if (confirmPassword !== password) {
      this._snackBar.open('Password & Confirm Password are not matched', 'X',
        {
          duration: 5000,
        });
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  onSubmit(myform: any) {
    const { password, email } = this.myForm.value
    if (password && email) {
      this.authService.changePassword(password, email);
      this._snackBar.open('Password Reset Sucessfully', 'X',
        {
          duration: 5000,
        });
        this.router.navigateByUrl('/login')
    }
  }
}

