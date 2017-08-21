// import {Directive, HostListener, HostBinding} from '@angular/core';

// @Directive ({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {

//   @HostBinding ('class.open')  isOpen = false;

//   @HostListener ('click') toggleOpen () {
//     this.isOpen = !this.isOpen;
//  }
// }




import { Directive, HostListener, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnDestroy {
  private timer = null;
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') scheduleTimeout() {
    this.cancelTimeout();

    this.timer = setTimeout(() => {
      this.timer = null;
      this.isOpen = false;
    }, 200);
  }

  @HostListener('mouseenter') cancelTimeout() {
    const t = this.timer;
    this.timer = null;

    if (t !== null) {
      clearTimeout(t);
    }

  }

  ngOnDestroy() {
    this.cancelTimeout();
  }

  // not functional; blur
  // @HostListener('blur') removeOpen() {
  //   this.isOpen = false;
  // }

  // note: not sufficient for dropdown button
  // @HostListener('mouseleave') removeOpen() {
  //   this.isOpen = false;
  // }
}
