import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // emulated- по замовчуванню, none-міняє стилі глобально виключає інкапсуляцію, Native -майже те саме що emulated
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // так як поля компонети є доступні тільки всередині тому треба добавити декоратор
  // аліас - для перейменування властивості ззовні
@Input('srvElement')  element:{type:string,name:string,content:string}
  constructor() { }

  ngOnInit(): void {
  }

}
