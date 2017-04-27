import {
  Directive,
ElementRef,
HostBinding,
HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') onClicked(): void {
    this.isOpen = !this.isOpen;
  }
}
