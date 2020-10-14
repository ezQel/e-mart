import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  mobileSearchVisible = false;
  activeUrl;

  searchForm = new FormGroup({
    searchField: new FormControl('')
  });

  constructor( public cart: CartService, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.activeUrl = this.router.url;
  }

  getClasses(route, rm): any {
    return {
      'nav-menu-item': true,
      remove: rm,
      active: this.activeUrl === route
    };
  }

  getFormClasses(): any {
    return {
      'search-form': !this.mobileSearchVisible,
      remove: !this.mobileSearchVisible,
      'mobile-search-form': this.mobileSearchVisible
    };
  }

  logout(): void {
    this.userService.auth.signOut();
  }

  openMobileSearchField(): void {
    this.mobileSearchVisible = true;
  }

  unBlur(): void  {
    this.mobileSearchVisible = false;
  }

  search(): void  {
    this.unBlur();
    const keyWord = this.searchForm.get('searchField').value;
    if (keyWord.length > 0) {
      this.router.navigate(['/search', `'${keyWord}'`]);
    }
  }


}
