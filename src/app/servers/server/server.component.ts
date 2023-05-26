import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private actRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // підхід через резолвер
    this.actRoute.data.subscribe(
      (data:Data)=>{
        this.server=data['server']
      }
    )
  }
  onEdit(){
    // відносний шлях
    // queryParamsHandling:'preserve' зберігає параметри в силці
      this.router.navigate(['edit'],{relativeTo:this.actRoute,queryParamsHandling:'preserve'})
  }

}
