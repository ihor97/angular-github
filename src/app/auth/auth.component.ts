import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'

})
export class AuthComponent {
    // прікольно що в тип string присвоїли null
    error: string = null
    isLoginMode = true
    isLoading = false
    constructor(private authService: AuthService) { }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }
    submitForm(form: NgForm) {
        // для того щоб якщо користувач буде лізти в інструменти розробники і включить кнопку субміт щоб спрацював цей захист
        if (!form.valid) {

        }
        const email = form.value.email
        const password = form.value.password
        this.isLoading = true
        // якщо ми залоговані 
        if (this.isLoginMode) {
            //....
        } else {
            this.authService.signUp(email, password).subscribe(
                resData => {
                    console.log(resData);
                    this.isLoading = false


                }, errorRes => {
                    // errorRes тут ми уже отримуємо дані що пройшли через pipe
                    // компонента має більше концентруватися на обновленні UI а не на обробці помилок
                    console.log(errorRes);
                    this.error = errorRes
                    this.isLoading = false


                }

            )
        }

        form.reset()

    }
}