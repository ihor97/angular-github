import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // альтернатива Renderer2
  // привязуємось до властивості 
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent'
  constructor(private renderer: Renderer2,private elRef:ElementRef) { }

  ngOnInit(): void {
  }
// відслідковуємо події
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor='blue'
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor='transparent'

  }
}
