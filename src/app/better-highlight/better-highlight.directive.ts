import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,private elRef:ElementRef) { }

  ngOnInit(): void {
  }
// відслідковуємо події
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
  }
}
