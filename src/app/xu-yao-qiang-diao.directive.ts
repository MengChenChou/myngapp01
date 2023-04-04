import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appXuYaoQiangDiao]'
})
export class XuYaoQiangDiaoDirective {

  constructor(el: ElementRef) { 
    console.log("實例化");
    console.log(el);
    el.nativeElement.style.background='#fcc';
  }

}
