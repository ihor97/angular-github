import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
// rxjs обгортає помилку в Observable
import { BehaviorSubject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
//формат відповіді з сервера 
export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean
}


@Injectable({ providedIn: 'root' })
export class AuthService {

    // ми будемо створювати юзера коли він ьуде залоговуватися
    // цей Subject дає доступ до емітованих даних навіть якщо вони не підписалися тоді коли дані буди випущені
//    це означає якщо юзер вже залогувався ми можемо пізніше получити доступ до тих даних
    user = new BehaviorSubject<User>(null)
    

    constructor(private http: HttpClient,private router:Router) { }
    signUp(email: string, password: string) {
        // так як нам треба відповідь з сервера ми повертаємо цей Observable
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxIDbEeDSzxrzQcbcg8dDM2rTB8PIKcxA',
            {
                email,
                password,
                returnSecureToken: true
            }).pipe(
                // ми можемо просто передати силку на ф-ю і параметр закинеться туди автоматично
                catchError(this.handleError),
                // tap дозволяє виконувати дії не міняючи відповідь з сервера
                tap(resData => {
                    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
                })
            )
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxIDbEeDSzxrzQcbcg8dDM2rTB8PIKcxA',
            {
                email,
                password,
                returnSecureToken: true
            }).pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
                })
            )
    }
    // метод для створення юзера
    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        // це дає нам дату прострочення токену
        // якщо ми обгортаємо мілісекунди в new Date(miliseconds ) це дає нам звичайну дату
        const experationData = new Date(new Date().getTime() + +expiresIn * 1000)
        const user = new User(email, userId, token, experationData)
        this.user.next(user)
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured'
        if (!errorRes.error || !errorRes.error.error) {
            // так як не всі помилки мають властивість error або error.error
            // тому невідомі помилки ми викидуємо через метод throwError з rxjs 
            return throwError(errorMessage)
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'The email address is already in use by another account'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'The password is invalid or the user does not have a password.'
                break;
        }
        return throwError(errorMessage)
    }

    logout(){
        // вилоговуємось
        this.user.next(null)
        this.router.navigate(['/auth'])

    }
}
