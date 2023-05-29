import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string='transparent'
  @Input('appBetterHighlight') highlightColor:string='blue'

  // альтернатива Renderer2
  // привязуємось до властивості 
  @HostBinding('style.backgroundColor') backgroundColor:string
  constructor(private renderer: Renderer2,private elRef:ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor=this.defaultColor
  }
// відслідковуємо події
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.defaultColor

  }
}
