import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
  activeUrl;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.activeUrl = this.router.url;
  }

  getClasses(route): any {
    return {
      'nav-menu-item': true,
      active: this.activeUrl === route
    };
  }

}
