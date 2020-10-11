import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  @Input() qty;
  @Output() getValue = new EventEmitter();
  quantity;

  constructor() { }


  minus(): void {
    if (this.quantity > 1){
      this.quantity--;
      this.getValue.emit(this.quantity);
    }
  }

  plus(): void{
    if (this.quantity < 30){
      this.quantity++;
      this.getValue.emit(this.quantity);
    }
  }

  ngOnInit(): void {
    this.quantity = this.qty;
  }

}
