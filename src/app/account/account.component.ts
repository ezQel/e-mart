import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email: string;
  name: string;
  address: string;
  editAddress: boolean;

  constructor(private userService: UserService, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Account');

    this.email = this.userService.currentUser.email;
    this.name = this.userService.currentUser.fullName;
    this.address = (this.userService.userAddress) ? this.userService.userAddress.streetAddress : '- - not set - -';
  }

  toggleEditAddress(): void {
    this.editAddress = !this.editAddress;
  }

  logout(): void {
    this.userService.auth.signOut();
    this.router.navigate(['']);
  }

}
