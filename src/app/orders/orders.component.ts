import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Order } from 'src/app/data/order';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  receivedOrder: Order;
  cancelledOrder: Order;

  constructor(private userService: UserService, private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Orders');
    this.orders$ = this.userService.getOrders();
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
