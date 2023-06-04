import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import {  map} from "rxjs/operators";
import { Subject } from "rxjs";


@Injectable(
    { providedIn: 'root'}
)
export class PostService {
    error=new Subject<string>()
    
    constructor(private http:HttpClient){}
    createAndStorePost(title:string,content:string){
        const postData:Post={title,content}
        this.http.post<{[key:string]:Post}>(
            'https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json',
            postData
            // коли компонеті не важливий статус post запиту то можна не вертати Observable
          ).subscribe(
            res => {
              console.log(res);
            },
            error=>{
                // замість того щоб вертати Observable  ми можемо споавстити про помилки через Subject
                this.error.next(error.message)
            }
          )
    }
    fetchPosts(){
        // замість того щоб робити Subject для сповіщення приходу даних 
        // ми вертаємо Observable
       return this.http
        // кращий варіант через дженерік
          .get<{[key:string]:Post}>('https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json')
          // трансформуємо наші дані які бужемо отримувати
          .pipe(map(
            // робимо тип для даних які ми приймаємо
            (response)=>{
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
          
    }
    deletePosts(){
       return this.http.delete('https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json')
            
    }

}