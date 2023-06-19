import { Component } from '@angular/core';
import { Observable,  } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent  {
// $ не обовязково, вказує на те що змінна зберігає Observable
  count$:Observable<number>

  // вказуємо typescript те що наш store буде такого типу {counter:number}
  constructor(private store:Store<{counter:number}>) {
    // store.select так ми читаємо дані по селектору і отримуємо Observable
    this.count$=store.select('counter')

  }


}
