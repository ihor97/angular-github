import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // '[appBasicHighlight]' пишемо так щоб коли ми прикріпляли до елемента директиву ми могли її писати без квадратних дужок
    // квадратні дужки вказують на те що це є атрибут 
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

    // інжектим елемент в директиву
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}