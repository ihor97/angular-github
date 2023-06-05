import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'

})
export class AuthComponent{
isLoginMode=true

constructor(private authService:AuthService){}
onSwitchMode(){
    this.isLoginMode=!this.isLoginMode
}
submitForm(form:NgForm){
    // для того щоб якщо користувач буде лізти в інструменти розробники і включить кнопку субміт щоб спрацював цей захист
    if(!form.valid){

    }
    const email=form.value.email
    const password=form.value.password
    // якщо ми залоговані 
    if(this.isLoginMode){
        //....
    }else{
        this.authService.signUp(email,password).subscribe(
        resData=>{
            console.log(resData);
            
        },error=>{
            console.log(error);
            
        }

    ) 
    }
   
    form.reset()

}
}