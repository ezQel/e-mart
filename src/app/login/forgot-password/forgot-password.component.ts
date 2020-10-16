import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.email])
  });

  constructor(private userService: UserService, private router: Router, private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Forgot Password');
  }

  requestPasswordReset(): void {
    if (this.emailForm.valid) {
      this.userService.auth.sendPasswordResetEmail(this.emailForm.get('email').value)
        .then(v => this.router.navigate(['login/resetpwd']))
        .catch(e => console.log(e));
    }
  }

}
