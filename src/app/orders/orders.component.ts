import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Order } from 'src/app/data-model/order';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  receivedOrder;
  cancelledOrder;

  constructor(private userService: UserService, private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Orders');
    this.orders$ = this.userService.getOrders();
  }

  getFormattedDate(timestamp: Date): string {
    const date = timestamp.getDate();
    let month;
    switch (timestamp.getMonth()) {
      case 0:
        month = 'Jan';
        break;

      case 1:
        month = 'Feb';
        break;

      case 2:
        month = 'Mar';
        break;

      case 3:
        month = 'Apr';
        break;

      case 4:
        month = 'May';
        break;

      case 5:
        month = 'Jun';
        break;

      case 6:
        month = 'Jul';
        break;

      case 7:
        month = 'Aug';
        break;

      case 8:
        month = 'Sep';
        break;

      case 9:
        month = 'Oct';
        break;

      case 10:
        month = 'Nov';
        break;

      case 11:
        month = 'Dec';
        break;

      default:
        month = 'N/A';
        break;
    }

    return `${date} ${month}`;
  }

  getRowClasses(status: string): any {
    return {
      new: status === 'new',
      accepted: status === 'accepted',
      delivered: status === 'delivered',
      cancelled: status === 'cancelled',
    };
  }

  confirmReception(order: Order): void {
    this.receivedOrder = order;
  }

  cancelOrder(order: Order): void {
    this.cancelledOrder = order;
  }

}
