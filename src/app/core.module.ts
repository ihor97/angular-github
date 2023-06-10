import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor";


@NgModule({
    // провайдери автоматично інжектяться на півні рут так що їх не треба експортити
    providers:[
        ShoppingListService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}
    ]
})
// клас суто для сервісів
export class CoreModule{

}