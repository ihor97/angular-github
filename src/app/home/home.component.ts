import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, interval } from "rxjs";
import { count } from 'rxjs-compat/operator/count';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private firstObsSubscription:Subscription
  constructor() { }

  ngOnInit(): void {
    // package.json -утримує усі залежності
    // кожну секунду буде створений івент
    // 
   this.firstObsSubscription= interval(1000).subscribe(
      count=>{
        console.log(count);
      }
    )
  }
ngOnDestroy(): void {
  // відписуємся від підписки
  this.firstObsSubscription.unsubscribe()
}

}
