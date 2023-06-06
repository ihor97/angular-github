import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { exhaustMap, map, take, tap } from "rxjs/operators"


// не треба добавляти privided-in тому шо інтерцептор інжектиться по іншому
@Injectable()
// замість того щоб вручну робити два обзевебла можна зробити просто інтерцептор
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req)
                }
                // якщо у нас є користувач тільки тоді робимо модифікований запит

                const modifiedReq = req.clone({ params: new HttpParams().set('auth', user.token) })
                return next.handle(modifiedReq)

            }))
    }
}