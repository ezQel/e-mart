import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetCodeForm = new FormGroup({
    resetCode: new FormControl(''),
    newPwd: new FormControl('')
  });

  passwordVisible = false;

  constructor(private router: Router, private userService: UserService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('FechiAdmin | Reset Password');
  }

  togglePasswordVisibility(pwdField): void {
    if (this.passwordVisible) {
      pwdField.type = 'password';
      this.passwordVisible = false;
    }
    else {
      pwdField.type = 'text';
      this.passwordVisible = true;
    }
  }

  resetUserPassword(): void {
    if (this.resetCodeForm.valid){
      this.userService
      .auth
      .confirmPasswordReset(
        this.resetCodeForm.get('resetCode').value,
        this.resetCodeForm.get('newPwd').value
      )
      .then(
        f => this.router.navigate([''])
      );
    }

  }

}
