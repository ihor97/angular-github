import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
    // запускається перед тим як йде запит
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if(req.url) якщо ми не хочмо робити запит по якісь урлі ми можемо його перервати
        // продовжуємо наш запит
        // реквест не можна модифікувати  якщо ми хочемо модифікувати то треба робити новий
        const modifiedRequest=req.clone({headers:req.headers.append('Auth','xyz')})

        // можна також модифікувати відповідь
        return next.handle(modifiedRequest)
    }
}