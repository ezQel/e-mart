import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Address } from 'src/app/data-model/address';
import { Order } from 'src/app/data-model/order';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser;
  userAddress: Address;

  constructor( public auth: AngularFireAuth, public db: AngularFirestore) {

    this.auth.user.subscribe(
      user => {
        if (user) {
          this.db.collection('users').doc<any>(user.uid).valueChanges()
          .subscribe(
            userdata => {
              if (userdata.userType === 'regular' ) {
                this.currentUser = user;
                this.userAddress = userdata.address;
              }
              else {
                this.currentUser = undefined;
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
    // return this.db.list('orders);
    return of( [
      {
        customerId: 'kjhkj',
        date: new Date().toDateString(),
        orderId: '0002fj5',
        product: {
          category: 'food',
          created: 564,
          description: 'tasty',
          id: '0',
          imageurl: '',
          name: 'food',
          price: 300,
        },
        quantity: 3,
        value: 4547
      }
    ] );
  }


}
