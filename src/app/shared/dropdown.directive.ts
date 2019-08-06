import { Directive, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
//add a class when clicked. remove the class when clicked again
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

//open css class on button click
