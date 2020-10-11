import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return (value) ? ((value.length > 15) ? value.substr(0, 15).concat('..') : value) : '';
  }

}
