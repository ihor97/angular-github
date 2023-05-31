import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";




const routes:Routes=[
    // можна ще це добавити, pathMatch:'full' вказуємо для того тому що '' є частиною усіх шляхів, тобто робити редірект якщо весь шлях є ''
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent},
    {path:'shopping-list',component:ShoppingListComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}