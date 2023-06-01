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
    const customIntervalObservable=Observable.create(
      observer=>{
        let count=0
        setInterval(()=>{
          observer.next(count)
          // якщо ми поставимо 5 то третій колюек не спрацює тому що викинулася помилка
          if(count==5){
            // закінчення обзервебл
            observer.complete()
          }
          if(count>3){
            // викидання помилки
            observer.error(
              new Error('count is greater 3')
            )
          }
          count++
        },1000)
      }

    )

   this.firstObsSubscription= customIntervalObservable.subscribe(
    // з колбека ми отримуємо дані
    data=>{
      console.log(data);
    }
    // другий параметр для помилок
    ,
    error=>{
      console.log(error);
      alert(error.message)
    }
    ,
    // ф-я яка викликається при завершенні обзервебл
    ()=>{
      console.log('Completed');
    }
    )

  }
ngOnDestroy(): void {
  this.firstObsSubscription.unsubscribe()
}

}
