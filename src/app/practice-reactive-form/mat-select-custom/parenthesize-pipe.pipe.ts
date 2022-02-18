import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parenthesizePipe'
})
export class ParenthesizePipePipe implements PipeTransform {

  transform(value: string): string {
    return value == null ? '' : '(' + value + ')';
  }
}
