import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramsSuscription:Subscription
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      // дістаємо параматетри зі шляху
      // це класно юзати для ініціалізації компоненти
      id: +this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    // params тут це є observable
    this.paramsSuscription= this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=+params['id']
        this.user.name=params['name']
      }
    )

  }
  ngOnDestroy(): void {
    this.paramsSuscription.unsubscribe()
  }

}
