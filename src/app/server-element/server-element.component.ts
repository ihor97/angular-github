import { AfterContentChecked, AfterContentInit, AfterViewChecked,
   AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, 
   OnInit,SimpleChanges,ViewChild,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // emulated- по замовчуванню, none-міняє стилі глобально виключає інкапсуляцію, Native -майже те саме що emulated
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit
,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{
  // так як поля компонети є доступні тільки всередині тому треба добавити декоратор
  // аліас - для перейменування властивості ззовні
@Input('srvElement')  element:{type:string,name:string,content:string}
@Input() name:string

@ViewChild('heading') header:ElementRef
// доступаємось до контенту що розташований в іншій компоненті
@ContentChild('contentParagraph') paragraph:ElementRef
  constructor() {
    console.log('constructor called');
    // нічого тоже не покаже
    // console.log( ' Text content of paragraph'+ this.paragraph.nativeElement.textContent);
    
    
   }
  //  єдиний хук який отримує параметри
   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called',changes);
   }

  ngOnInit(): void {
    console.log('ngOnit called');
    // нічого не виведе
// console.log('text contnent: '+this.header.nativeElement.textContent); 

  }

ngDoCheck(): void {
  // для перевірки коли щось міняється
  console.log('ngDoCheck called');
}
ngAfterContentInit(): void {
  // викликається тільки раз 
  console.log('ngAfterContentInit called');
  console.log( ' Text content of paragraph '+ this.paragraph.nativeElement.textContent);


}

ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked called');
  
}
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked called');

  
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
console.log('text contnent: '+this.header.nativeElement.textContent);

  
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called');
  
}
















}
