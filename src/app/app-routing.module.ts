import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";




const routes:Routes=[
    // можна ще це добавити, pathMatch:'full' вказуємо для того тому що '' є частиною усіх шляхів, тобто робити редірект якщо весь шлях є ''
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:[
        // замість того щоб редіректити можна поставити просто ''
        // {path:'',redirectTo:'choose-recipe',pathMatch:'full'},
        {path:'',component:SelectRecipeComponent},
        // адреса не може починатися з /
        {path:':id',component:RecipeDetailComponent}
    ]},
    {path:'shopping-list',component:ShoppingListComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}