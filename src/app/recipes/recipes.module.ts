import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ],

    imports: [RouterModule, CommonModule, ReactiveFormsModule,RecipesRoutingModule]
    , exports: [
// так як ми використовуємо компоненти в RecipesRoutingModule то можна їх не експортувати
// ми їх і так не будемо юзати в AppComponent
    ]
})
export class RecipesModule {


}