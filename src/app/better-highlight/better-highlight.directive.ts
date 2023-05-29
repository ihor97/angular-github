import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,private elRef:ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
}
