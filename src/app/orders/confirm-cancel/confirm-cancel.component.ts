import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Order } from 'src/app/data/order';

@Component({
  selector: 'app-confirm-cancel',
  templateUrl: './confirm-cancel.component.html',
  styleUrls: ['./confirm-cancel.component.css']
})
export class ConfirmCancelComponent implements OnInit {
  @Output() closePopup = new EventEmitter();
  @Input() order: Order;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  cancelOrder(): void {
    this.userService.db.collection('orders')
      .doc<Order>(this.order.orderId)
      .update(
        {
          status: 'cancelled'
        }
      )
      .then(() => this.closePopup.emit());
  }

}
