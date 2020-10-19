import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordForm = new FormGroup({
    newPassword: new FormControl(''),
  });

  passwordVisible = false;
  authRequired;

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Change Password');
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

  changePassword(): void{
    if (this.passwordForm.valid) {
      this.userService.auth.currentUser
      .then(
        user => {
          user.updatePassword(this.passwordForm.get('newPassword').value)
          .then(
            (reason) => {
              this.authRequired = reason;
            }
          );
          if (!this.authRequired) {
            this.snackBar.open('Password change successful', 'DISMISS', { duration: 3000 });
            this.router.navigate(['account']);
          }
        }
      );
    }

  }

  logoutToReaunthicate(): void {
    this.userService.auth.signOut();
    this.router.navigate(['login']);
  }

}
