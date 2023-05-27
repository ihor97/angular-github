import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() newServer = new EventEmitter<{ type: string, name: string, content: string }>()
  @Output('bpCreated') newServerBlueprint = new EventEmitter<{ type: string, name: string, content: string }>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
    const server = {
      type: 'server',
      // отримання даних через локальні силки
      name: nameInput.value,
      content: contentInput.value
    }
    this.newServer.emit(server)
  }

  onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
    const serverBlueprint = {
      type: 'blueprint',
      name: nameInput.value,
      content: contentInput.value
    }
    this.newServerBlueprint.emit(serverBlueprint)
  }
}
