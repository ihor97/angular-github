import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      // дістаємо параматетри зі шляху
      // це класно юзати для ініціалізації компоненти
      id: +this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    // params тут це є observable
    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=+params['id']
        this.user.name=params['name']
      }
    )

  }

}
