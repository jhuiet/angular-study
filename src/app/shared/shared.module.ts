import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './custom.pipe.';

@NgModule({
  declarations: [
    DropdownDirective,
    CustomPipe  ],
  imports: [],
  exports: [
    DropdownDirective,
    CommonModule,
    CustomPipe
  ]
})
export class SharedModule {}
