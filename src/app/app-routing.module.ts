import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recipes/recipes-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";




const routes:Routes=[
    // можна ще це добавити, pathMatch:'full' вказуємо для того тому що '' є частиною усіх шляхів, тобто робити редірект якщо весь шлях є ''
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,canActivate:[AuthGuard],children:[
        // замість того щоб редіректити можна поставити просто ''
        // {path:'',redirectTo:'choose-recipe',pathMatch:'full'},
        {path:'',component:SelectRecipeComponent},
        // адреса не може починатися з слеша
        // треба щоб роути без динамічних параметрів йшли першими тому що якщо вони будуть йти після значення в path буде парситися як динамічний параметр
        {path:'new',component:RecipeEditComponent},
        // не забудь добавити резолвер в шляхи де він потрібен
        {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolverService]},
        {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolverService]},
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'auth',component:AuthComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}