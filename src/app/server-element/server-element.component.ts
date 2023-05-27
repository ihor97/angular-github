import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,SimpleChanges,ViewEncapsulation } from '@angular/core';

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
  constructor() {
    console.log('constructor called');
    
   }
  //  єдиний хук який отримує параметри
   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called',changes);
   }

  ngOnInit(): void {
    console.log('ngOnit called');

  }

ngDoCheck(): void {
  // для перевірки коли щось міняється
  console.log('ngDoCheck called');
}
ngAfterContentInit(): void {
  // викликається тільки раз 
  console.log('ngAfterContentInit called');
}

ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked called');
  
}
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked called');

  
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');

  
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called');
  
}
















}
