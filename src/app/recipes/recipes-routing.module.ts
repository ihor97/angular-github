import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";

const routes:Routes=[
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
]
@NgModule({
imports:[
    // forRoot використовується тільки раз, а forChild зливається атвоматично з forRoot
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})
export class RecipesRoutingModule{

}