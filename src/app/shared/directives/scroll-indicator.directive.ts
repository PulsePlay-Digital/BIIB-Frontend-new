import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollIndicator]'
})
export class ScrollIndicatorDirective {

  scrollId = document.getElementById('scrollBar');

  constructor() { }
  @HostListener('window:scroll')

  onScroll() {
    const scroll = window?.scrollY;
    const height = document.documentElement.scrollHeight - window?.innerHeight;
    const scrollResult = Math.floor((100 * scroll) / height);
    
    if (this.scrollId != null) {
      this.scrollId.style.width = scrollResult + '%';
    }
  }
}
