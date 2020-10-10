import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.css']
})
export class EditEmailComponent implements OnInit {
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.email])
  });

  constructor(private router: Router, private userService: UserService, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Change Email');
  }

  requestEmailChange(): void{
    if (this.emailForm.valid) {
      this.userService.auth.currentUser
      .then(
        user => {
          const actionCodeSettings = {
            url: 'https://admin.fechi.co.ke/preferences/account/emailchange' // TODO whitelist this url
          };
          user.verifyBeforeUpdateEmail(this.emailForm.get('email').value, actionCodeSettings);
          this.snackbar.open(`Check your email (${user.email}) for next instructions`, 'DISMISS', { duration: 6000 });
          this.router.navigate(['account']);
        }
      );
    }
  }

}
