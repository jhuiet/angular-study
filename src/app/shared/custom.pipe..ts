import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any) {
    return `the amazing pipe was added to: ${value}`;
  }
}
