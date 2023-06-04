import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
// інжектимо клієнт 
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    // posts.json треба обовязково додавати коли юзаємо файрбейз так вимагаї її API
    this.http.post(
      'https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json',
      // ангулар бере наш обєкт і автоматично його ковертує в json
    postData
    // якщо ми не підписуємся ангулар не буде відправляти запит так як дума що ніхто не зацікавлений в поверненні даних
    ).subscribe(
      res=>{
        console.log(res);
        
      }
    )

    // метод post вертає Observable 
    // браузер робить два запроса перший з options - вказує чи можна нам робити запрос, а другий - уже наш запрос
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
