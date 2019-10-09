import { Directive, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[enjeuCardTab]'
})
export class CardTabDirective implements OnInit {

  constructor(private elRef: string, private renderer: Renderer2) { }

  ngOnInit() {
    //remove class active et show TODO
  }
  @HostListener('mouseclick')
  onMouseClick() {

  }
}
