import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resetpassowrd',
  templateUrl: './resetpassowrd.component.html',
  styleUrls: ['./resetpassowrd.component.scss']
})
export class ResetpassowrdComponent implements OnInit { hide = true
  myForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(myForm: any) {
    console.log(this.myForm.value);
  }

}