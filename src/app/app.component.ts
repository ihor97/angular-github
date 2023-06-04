import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false
  // інжектимо клієнт 
  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.isFetching = true
    this.postService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.loadedPosts = posts
        this.isFetching = false
      }
    )

  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    this.postService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.loadedPosts = posts
        this.isFetching = false
      }
    )

  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts()
      .subscribe(() => {
        this.loadedPosts = []
      })
  }

}
