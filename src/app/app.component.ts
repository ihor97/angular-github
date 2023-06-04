import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  private errorSub:Subscription
  loadedPosts: Post[] = [];
  isFetching = false
  error=null
  // інжектимо клієнт 
  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
   this.errorSub= this.postService.error.subscribe(
      error=>{
        this.error=error
      }
    )
    this.isFetching = true
    this.postService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.loadedPosts = posts
        this.isFetching = false
      },
      // другий аргумент приймає колбек з обробкою помилок
      error=>{
        this.isFetching = false
        this.error=error.error.error
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
      },
      error=>{
        this.error=error.error.error
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
  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }
  onHandleError(){
    this.error=null
  }
}
