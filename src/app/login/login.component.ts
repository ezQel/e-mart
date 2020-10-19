import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserData } from '../data/user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logginError: string;
  passwordVisible: boolean;
  loginBtnDisabled: boolean;

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.email]),
    password : new FormControl('')
  });


  constructor(private userService: UserService, private router: Router, private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Login');
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

  login(): void {
    if (this.loginForm.valid){
      this.loginBtnDisabled = true;
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;

      this.userService.auth
        .signInWithEmailAndPassword(email, password)
        .then((cr) => {
          this.userService.db.collection('users')
            .doc<UserData>(cr.user.uid).valueChanges()
            .subscribe(
              userdata => {
                if (userdata.ADMIN) {
                  this.userService.auth.signOut();
                  this.logginError = 'Sorry. Account not allowed';
                  this.loginBtnDisabled = false;
                }
                else {
                  this.router.navigate([this.userService.afterLoginRedirect]);
                }
              });
        })
        .catch(err => {
          this.logginError = err; // show error above login form
          this.loginBtnDisabled = false;
        });
    }

  }

}
