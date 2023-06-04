import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
// tap дозволяє виконати якийсь код без змніни відповіді
import { map,catchError,tap } from "rxjs/operators";
// throwError це є Observable який обгортає нашу помилку
import { Subject, throwError } from "rxjs";


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
            postData,
            {
                // 'body' означє що ми отримуємо тільки самі дані без метаданих
                observe:'response'
            }
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
        let searchParams=new HttpParams()
        // обєкт з параметрами перезаписуєтсья
        searchParams=searchParams.append('print','pretty')
        searchParams=searchParams.append('custom','key')
       return this.http
        // кращий варіант через дженерік
          .get<{[key:string]:Post}>('https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json',
          {
            headers:new HttpHeaders({
                "Custom-Header":'hello'
            }),
            // добавлення квері параметрів
            // params: new HttpParams().set('print','pretty')
            params: searchParams
            
          })
          
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
          ),catchError(errorMes=>{
           return throwError(errorMes)
          }))
          
          
    }
    deletePosts(){
       return this.http.delete('https://ng-udemy-80a0b-default-rtdb.firebaseio.com/posts.json',
       {observe:'events'}).pipe(
        tap(
            event=>{
                console.log(event);
                // HttpEventType - єнам з кодами івентів
                if(event.type===HttpEventType.Sent){
                    // тут можна сказати шо запит пішов і можна обновити UI
                }
                if(event.type===HttpEventType.Response){
                    console.log(event.body);
                    
                }
            }
        )
       )
            
    }

}