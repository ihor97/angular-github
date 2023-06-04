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
      res=>{
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
  private fetchPosts(){
    this.http.get('https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json').subscribe(
      posts=>{
        console.log(posts);
        
      }
    )
  }
}
