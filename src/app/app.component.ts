import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentYear: number;
  navigating;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.navigating = true;
        }
        if (event instanceof NavigationEnd) {
          this.navigating = false;
        }
      }
    );
    this.currentYear = firebase.default.firestore.Timestamp.now().toDate().getFullYear();
  }

}
