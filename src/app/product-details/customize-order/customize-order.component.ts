import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Extra } from 'src/app/data/extra';

@Component({
  selector: 'app-customize-order',
  templateUrl: './customize-order.component.html',
  styleUrls: ['./customize-order.component.css']
})
export class CustomizeOrderComponent implements OnInit {
  @Output() unblur = new EventEmitter();
  @Input() extras: Extra[];
  selectedExtras: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedExtras = {};
  }

  selectOptions(extra: string, option: string): void {
    if (!this.selectedExtras[extra]) {
      this.selectedExtras[extra] = {};
      this.selectedExtras[extra][option] = true;
    }
    else if (this.selectedExtras[extra][option]) {
      this.selectedExtras[extra][option] = false;
    }
    else {
    this.selectedExtras[extra][option] = true;
    }
  }

  setExtras(): void {
    const customExtras: Extra[] = [];
    Object.keys(this.selectedExtras).forEach(
      x => {
        if (this.selectedExtras[x]) {
          const extra = new Extra();
          extra.name = x;
          extra.options = [];

          Object.keys(this.selectedExtras[x]).forEach(
            o => {
              if (this.selectedExtras[x][o]) {
                extra.options.push(o);
              }
            }
          );

          customExtras.push(extra);
        }
      }
    );
    this.unblur.emit(customExtras);
  }

}
