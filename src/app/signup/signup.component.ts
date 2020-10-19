import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordVisible: boolean;
  btnDisabled: boolean;
  errorMsg: string;

  signUpForm = new FormGroup({
    email : new FormControl('', [Validators.email]),
    password : new FormControl(''),
  }
  );

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
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

  signUp(): void {
    if (this.signUpForm.valid){
      this.btnDisabled = true;
      const email = this.signUpForm.get('email').value;
      const password = this.signUpForm.get('password').value;

      this.userService.auth
        .createUserWithEmailAndPassword(email, password)
        .then(cr => {
          this.userService.db.collection('users').doc<any>(cr.user.uid).set(
            {
              ADMIN: false
            }
          );
          cr.user.updateProfile(
            {
              displayName: cr.user.email.split('@').shift()
            }
          );
        }).catch((error) => {
          this.errorMsg = error.message;
          this.btnDisabled = false;
        });
    }
  }

}
