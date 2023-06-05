import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import {map} from "rxjs/operators"
import { RecipesService } from "../recipes/recipes.service";

@Injectable(
    {providedIn:'root'}
)
export class DataStorageService{
    
    constructor(private http:HttpClient,private recipeService:RecipesService){

    }

    storeRecipes(){
        const recipes=this.recipeService.getRecipes()
        // якщо ми користуємось put то всі дані що були в сховищі перепишуться
        // якщо ми робимо put то ми отримуємо індекси
        this.http.put('https://project-udemy-1fd00-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(
            response=>{
                console.log(response);
                
            }
        )
    }

    getRecipes(){
        return this.http
            .get<{[key:string]:Recipe}>('https://project-udemy-1fd00-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(responseData=>{
                const recipeArr:Recipe[]=[]
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        recipeArr.push({...responseData[key],id:key}) 
                    }
                }
                return recipeArr
            })
                
            )
    }


    postRecipe(recipe:Recipe){
       return this.http.post<Recipe>('https://project-udemy-1fd00-default-rtdb.firebaseio.com/',
        recipe
        )
    }
}