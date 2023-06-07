import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'

})
export class AuthComponent implements OnDestroy {
    // запхали директиву 
    @ViewChild(PlaceholderDirective) alertHost:PlaceholderDirective
    private closeSub:Subscription
    // прікольно що в тип string присвоїли null
    error: string = null
    isLoginMode = true
    isLoading = false
    constructor(private authService: AuthService,private router:Router,private componentFactoryResolver:ComponentFactoryResolver) { }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }
    submitForm(form: NgForm) {
        // для того щоб якщо користувач буде лізти в інструменти розробники і включить кнопку субміт щоб спрацював цей захист
        if (!form.valid) {

        }
        const email = form.value.email
        const password = form.value.password
// для того щоб не повторятися ми робимо змінну куди будемо зберігати результат запросів
    let authObs:Observable<AuthResponseData>

        this.isLoading = true
        // якщо ми залоговані 
        if (this.isLoginMode) {
            authObs=  this.authService.login(email,password)
        } else {
            authObs= this.authService.signUp(email, password)
        }

        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false
                this.router.navigate(['/recipes'])

            }, errorRes => {
                // errorRes тут ми уже отримуємо дані що пройшли через pipe
                // компонента має більше концентруватися на обновленні UI а не на обробці помилок
                console.log(errorRes);
                this.error = errorRes
                this.showErrorAlert(errorRes)
                this.isLoading = false

            }

        )
        form.reset()

    }
    // закриваємо модалку
    onHandleError(){
        this.error=null
    }

    private showErrorAlert(message:string){
        // const alertComp=new AlertComponent() неправильний підхід
        // використовуємо резолвер щоб отримати доступ до фабрики компонент
        const alertComponentFactory= this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
        const hostViewContainerRef=this.alertHost.viewContainerRef
        // на всякий випадок очищаємо контейнер
        hostViewContainerRef.clear()
// тут уже створюється компонента в потрібному нам місці
      const componentRef=  hostViewContainerRef.createComponent(alertComponentFactory)
// конфігуруємо компоненту щоб дані відображалися коректно
      componentRef.instance.message=message

    //   ця підписка автоматично не стирається
    // це є імітер з компоненти
    this.closeSub= componentRef.instance.close.subscribe(
        ()=>{
            this.closeSub.unsubscribe()
            hostViewContainerRef.clear()
        }
      )

    }
    ngOnDestroy(): void {
        if(this.closeSub){
            // відписуємось ше якщо компоненти вмирає
            this.closeSub.unsubscribe()
        }
    }



}