import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take, tap } from "rxjs/operators";
@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
constructor(private authService:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //   резолвимо наш Обзервебл в boolean
        return  this.authService.user.pipe(
            // беремо дані тільки раз і вілписуємся так як якщо буде підписка можуть виникнути побічні дії
            take(1),
            map(user=>{
            const isAuth=!!user
            if(isAuth){
                return true
            }
            // другий підхід для редіректа через UrlTree
        return this.router.createUrlTree(['/auth'])
       })
    //    ,tap(
        // //перший підхід
    //     // якщо користувач буде вручну переходити по силці то ми його будемо редіректити
    //     isAuth=>{
    //         if(!isAuth){
    //             this.router.navigate(['/auth'])
    //         }
    //     }
    //    )
       )
    }
}