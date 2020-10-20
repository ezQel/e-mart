import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) { }
  canActivate(): Observable<boolean> | boolean {
    if (this.user.currentUser){
      return true;
    }
    else {
      return this.user.auth.user.pipe(
        map(user => {
          if (user) {
            return true;
          }
          else {
            this.user.afterLoginRedirect = this.router.url;
            this.router.navigate(['login']);
            return false;
          }
        }));
    }
  }


}
