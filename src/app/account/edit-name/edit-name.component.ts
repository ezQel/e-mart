import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  nameForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private router: Router, private userService: UserService, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Edit Name');
  }

  changeName(): void{
    if (this.nameForm.valid) {
      this.userService.auth.currentUser
      .then(
        user => {
          user.displayName = this.nameForm.get('name').value;
          this.snackbar.open(`name change successful`, 'DISMISS', { duration: 6000 });
          this.router.navigate(['account']);
        }
      );
    }
  }

}
