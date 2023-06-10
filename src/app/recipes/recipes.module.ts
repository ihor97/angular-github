import { NgModule } from "@angular/core";

// для того щоб lazy працювало треба щоб компоненти що відносяться до рецептів були зібрані тільки тут
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ],

    imports: [RouterModule, SharedModule, ReactiveFormsModule,RecipesRoutingModule]
    , exports: [
// так як ми використовуємо компоненти в RecipesRoutingModule то можна їх не експортувати
// ми їх і так не будемо юзати в AppComponent
    ]
})
export class RecipesModule {


}