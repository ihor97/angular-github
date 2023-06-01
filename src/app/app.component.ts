import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
// subject і @Output є несумісними
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'udemy-github';
  activatedSub:Subscription
  userActivated:boolean=false
  constructor(private userService:UserService){

  }
ngOnInit(): void {
  this.activatedSub=this.userService.activatedEmitter.subscribe(
    (par)=>{
      this.userActivated=par
    }
  )
}
ngOnDestroy(): void {
  // від Subject треба обовязково відписуватися коли ми вручну юзаємо метод next
  this.activatedSub.unsubscribe()
}
}
