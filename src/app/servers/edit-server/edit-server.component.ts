import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false
  constructor(private serversService: ServersService,private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit=queryParams['allowEdit']=='1'
      }
    )
    this.actRoute.fragment.subscribe()
    const id=+this.actRoute.snapshot.params['id']
    this.actRoute.params.subscribe(
      (params:Params)=>{
        this.server = this.serversService.getServer(params['id']);
      }
    )
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
