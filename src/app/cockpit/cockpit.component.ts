import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() newServer = new EventEmitter<{ type: string, name: string, content: string }>()
  @Output() newServerBlueprint = new EventEmitter<{ type: string, name: string, content: string }>()
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    const server = {
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }
    this.newServer.emit(server)
  }

  onAddBlueprint() {
    const serverBlueprint = {
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }
    this.newServerBlueprint.emit(serverBlueprint)
  }
}
