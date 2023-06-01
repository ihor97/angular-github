import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, Observable } from "rxjs";
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
    // створення кастомного обзервебл, таке саме як інтервал в попередньому варіанті
    const customIntervalObservable=Observable.create(
      // observer частина яка зацікавлена в обновленні інформації
      observer=>{
        let count=0
        setInterval(()=>{
          observer.next(count)
          count++
        },1000)
      }

    )

   this.firstObsSubscription= customIntervalObservable.subscribe(data=>{
      console.log(data);
    })

  }
ngOnDestroy(): void {
  // відписуємся від підписки
  this.firstObsSubscription.unsubscribe()
}

}
