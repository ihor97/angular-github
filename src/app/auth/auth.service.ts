import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
// rxjs обгортає помилку в Observable
import { throwError } from "rxjs";
//формат відповіді з сервера 
interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }
    signUp(email: string, password: string) {
        // так як нам треба відповідь з сервера ми повертаємо цей Observable
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxIDbEeDSzxrzQcbcg8dDM2rTB8PIKcxA',
            {
                email,
                password,
                returnSecureToken: true
            }).pipe(
                catchError(errorRes => {
                    let errorMessage = 'An unknown error occured'
                    if (!errorRes.error || !errorRes.error.error) {
                        // так як не всі помилки мають властивість error або error.error
                        // тому невідомі помилки ми викидуємо через метод throwError з rxjs 
                        return throwError(errorMessage)
                    }
                    switch (errorRes.error.error.message) {
                        case 'EMAIL_EXISTS':
                            errorMessage = 'The email address is already in use by another account'
                    }
                    return throwError(errorMessage)
                })
            )
    }
}
