import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipesService } from "./recipes.service";

@Injectable(
    {
        providedIn:'root'
    }
)
export class RecipeResolverService implements Resolve<Recipe[]> {
    
    constructor(private dataStorage:DataStorageService,private recipeService:RecipesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    //    ми не підписуємось в резолвері так як резолвер сам підписується і дізнається сам 
    // коли прийдуть дані
    /*
    коли ми редагуємо рецепт зміни не відображаються в списку, він просто скачує дані з сервера і переписує
    контент не відображаючи зміни
    */
        const recipes=this.recipeService.getRecipes()
        // якщо ми маємо не маємо рецептів тільки тоді робити запит
        if(recipes.length===0){
            return this.dataStorage.fetchRecipes()
        }
        // якщо рецепти є просто вертаємо наші старі рецепти
        return recipes
    }
}