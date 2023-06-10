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

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ],
    // навіть якщо ми потім імпортимо цей модуль в App module ми не маємо доступа до інших модулів 
    // так що їх треба імпортувати
    // CommonModule - це ж те саме що  BrowserModule
    imports: [RouterModule, CommonModule,ReactiveFormsModule]
    // щоб заюзати компоненти в AppModule треба їх еспортанути
    , exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        SelectRecipeComponent,
        RecipeEditComponent,
    ]
    // сервіси можна запровайдити в AppModule і вони будуть доступні по всій апці
})
export class RecipesModule {


}