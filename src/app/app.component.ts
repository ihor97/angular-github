import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'server',name:'Testserver',content:'Just a test'}];


  onServerAdded(newServer:{type:string,name:string,content:string}) {
    this.serverElements.push(newServer)
  }

  onBlueprintAdded(newServerlueprint:{type:string,name:string,content:string}) {
    this.serverElements.push(newServerlueprint)
  }
}
