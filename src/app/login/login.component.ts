import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logginError;
  passwordVisible = false;

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
      this.userService.auth
        .signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .then((cr) => {
          cr.user.getIdToken(true);
          // redirected to home
          this.userService.db.collection('users').doc<any>(cr.user.uid).valueChanges()
            .subscribe(
              userdata => {
                if (userdata) {
                  if (userdata.userType === 'regular') {
                    this.router.navigate(['orders']);
                  }
                  else {
                    this.userService.auth.signOut();
                    throw new Error('Account not allowed');
                  }
                }
              });
        })
        .catch(err => {
          // show error under login form e.g. user does not exist / incorrect password
          this.logginError = err;
        });
    }
  }

}
