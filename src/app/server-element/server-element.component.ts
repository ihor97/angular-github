import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // так як поля компонети є доступні тільки всередині тому треба добавити декоратор
@Input()  element:{type:string,name:string,content:string}
  constructor() { }

  ngOnInit(): void {
  }

}
