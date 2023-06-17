import { NgModule } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";



@NgModule({
// так як ми інжектимо сервіс в аппмодулі і тут поведінка буде відрізнятися
    // providers:[LoggingService],
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,],
    imports: [SharedModule,FormsModule,
        // якщо у нас один роут то можна це вказати зрвзу в імпортах
        RouterModule.forChild(
        [ {path:'',component:ShoppingListComponent},]
    )]
})
export class ShoppingListModule {

}