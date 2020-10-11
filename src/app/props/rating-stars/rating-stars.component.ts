import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {
  @Input() mode;
  @Input() rating: number;
  @Input() reviews: number;
  @Output() value = new EventEmitter();

  filledStars = [];
  emptyStars = [1, 2, 3, 4, 5];

  filled;
  emptie = 5;

  constructor() { }

  ngOnInit(): void {
    this.filledStars = this.emptyStars.splice(0, this.rating);
  }

  empty(n): void {
    if (this.mode === 'interactive') {
      this.filledStars = [1, 2, 3, 4, 5].splice(0, n);
      this.emptyStars = [1, 2, 3, 4, 5].splice(0, (5 - n));
      this.value.emit(n);
    }
  }

  fill(n): void {
    if (this.mode === 'interactive') {
      this.emptie -= n;
      this.filled = 5 - this.emptie;
      this.filledStars = [1, 2, 3, 4, 5].splice(0, 5 - this.emptie);
      this.emptyStars = [1, 2, 3, 4, 5].splice(0, this.emptie);
      this.value.emit(n);
    }
  }

}
