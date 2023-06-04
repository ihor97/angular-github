import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map} from "rxjs/operators";
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  // інжектимо клієнт 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(
      'https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe(
      res => {
        console.log(res);
      }
    )

  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts()

  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPosts() {
    this.http
      .get('https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json')
      // трансформуємо наші дані які бужемо отримувати
      .pipe(map(
        // робимо тип для даних які ми приймаємо
        (response:{[key:string]:Post})=>{
          const postsArray:Post[]=[]
          for (const key in response) {
            if(response.hasOwnProperty(key)){
              // додаємо ще  айді до нашого обєкту з даними
              postsArray.push({...response[key],id:key})
            }
          }
          return postsArray
        }
      ))
      .subscribe(
        posts => {
          console.log(posts);

        }
      )
  }
}
