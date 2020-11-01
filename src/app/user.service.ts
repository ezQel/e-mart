import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Address } from 'src/app/data/address';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from './data/order';
import { UserData } from './data/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: firebase.User;
  isAdmin: boolean;
  userAddress: Address;
  afterLoginRedirect = '';

  constructor( public auth: AngularFireAuth, public db: AngularFirestore) {

    this.auth.user.subscribe(
      user => {
        if (user) {
          this.db.collection('users').doc<UserData>(user.uid).valueChanges()
          .subscribe(
            (userdata) => {
              if (userdata) {
                this.isAdmin = userdata.ADMIN;
              }

              if (this.isAdmin) {
                this.auth.signOut();
                this.currentUser = undefined;
              }
              else {
                // TODO: load cart from userdata
                this.currentUser = user;
                this.userAddress = userdata.address;
              }
            }
          );
        }
        else {
          this.currentUser = undefined;
        }
      }
    );

  }

  getOrders(): Observable<Order[]>{
    return this.db.collection<Order>('orders', q => q.where('orderedBy', '==', this.currentUser.uid)).valueChanges();
  }
}
