import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,private userService:UserService) {
  }

  ngOnInit() {
    // Observable дає нам змогу відслідкувати зміни 
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
  onActivate(){
    // у Subject є метод next()
    // Subject є більш активним
    this.userService.activatedEmitter.next(true)
  }
}
