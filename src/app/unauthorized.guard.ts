import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.user.auth.user.pipe(
      map(user => {
        if (user) {
          this.router.navigate(['']);
          return false;
        }
        else {
          return true;
        }
      }));
  }

}
