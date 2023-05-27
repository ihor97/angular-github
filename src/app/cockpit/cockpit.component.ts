import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() newServer = new EventEmitter<{ type: string, name: string, content: string }>()
  @Output('bpCreated') newServerBlueprint = new EventEmitter<{ type: string, name: string, content: string }>()
  // використання ViewChild для отримання доступу до елемента
  @ViewChild('serverContentInput') serverContentInput:ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    const server = {
      type: 'server',
      // отримання даних через локальні силки
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.newServer.emit(server)
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    const serverBlueprint = {
      type: 'blueprint',
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.newServerBlueprint.emit(serverBlueprint)
  }
}
