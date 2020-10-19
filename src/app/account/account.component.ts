import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Address } from '../data/address';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  editAddress: boolean;

  constructor(public userService: UserService, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Account');
  }

  toggleEditAddress(): void {
    this.editAddress = !this.editAddress;
  }

  logout(): void {
    this.userService.auth.signOut();
    this.router.navigate(['']);
  }

}
