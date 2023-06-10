import { NgModule } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,],
    imports: [CommonModule,FormsModule,
        // якщо у нас один роут то можна це вказати зрвзу в імпортах
        RouterModule.forChild(
        [ {path:'shopping-list',component:ShoppingListComponent},]
    )]
})
export class ShoppingListModule {

}