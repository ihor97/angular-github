import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable(
    {
        providedIn:'root'
    }
)
export class RecipeResolverService implements Resolve<Recipe[]> {
    
    constructor(private dataStorage:DataStorageService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    //    ми не підписуємось в резолвері так як резолвер сам підписується і дізнається сам 
    // коли прийдуть дані
        return this.dataStorage.fetchRecipes()
    }
}