import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Review } from 'src/app/data/review';
import { Order } from 'src/app/data/order';
import * as firebase from 'firebase';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() order: Order;
  @Output() unblur = new EventEmitter();
  reviewForm = new FormGroup({
    reviewMsg: new FormControl('')
  });
  rating: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  setRating(rating: number): void {
    this.rating = rating;
  }

  confirmGoodsReceived(): void {
    this.saveReview();
    this.userService.db.collection('orders')
      .doc<Order>(this.order.orderId)
      .update(
        {
          status: 'delivered'
        }
      )
      .then(() => this.unblur.emit());
  }

  saveReview(): void {
    if (this.rating) {
      const msg = this.reviewForm.get('reviewMsg').value;

      this.userService.db.collection('reviews')
        .doc<Review>(this.order.orderId)
        .set(
          {
            productId: this.order.product.key,
            userName: this.userService.currentUser.displayName,
            date: firebase.default.firestore.Timestamp.now(),
            message: msg,
            rating: this.rating
          }
        );
    }
  }

}
