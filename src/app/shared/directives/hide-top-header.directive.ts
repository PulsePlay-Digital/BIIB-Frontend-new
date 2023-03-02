import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideTopHeader]'
})
export class HideTopHeaderDirective {
  topheaderId = document.getElementById('topheader');

  offsetFlag = true;
  constructor() { }
//   @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
//     console.log(window.pageYOffset, event);
//     if(window.pageYOffset> 200 )
//      this.offsetFlag = false;
//     else
//       this.offsetFlag = true;
//  }
@HostListener('window:scroll')

onScroll() {
  console.log(this.topheaderId)
  const scroll = window?.scrollY;
  const height = document.documentElement.scrollHeight - window?.innerHeight;
  const scrollResult = Math.floor((100 * scroll) / height);
  
  if (this.topheaderId != null) {
    this.topheaderId.style.width = scrollResult + '%';
  }
}
}
