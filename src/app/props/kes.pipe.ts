import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kes'
})
export class KesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return (value) ? 'Ksh. ' + this.format(value) : '';
  }

  format(val: number): string {
    const v = val.toString().split('').reverse().map((e, i, ar) => (i % 3 === 0 && i > 1 ) ? e + ',' : e);

    return v.reverse().reduce((pr, c) => pr + c);
  }

}
