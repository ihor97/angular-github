import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import {map, tap} from "rxjs/operators"
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

    fetchRecipes(){
        return this.http
            .get<Recipe[]>('https://project-udemy-1fd00-default-rtdb.firebaseio.com/recipes.json')
            /*
            так як аппка може ламатися через те що масиву інгридієтнів може не бути 
            і той масив буде мати undefined
            ми трансформуємо наші дані з сервера таким чином що коли немає інгридієнтів 
            ми ставимо туди пустий масив 
            
            коли ми працюємо над масивом обєктів за допомоги map  ми маємо повертати обєкт!
            
            
            
            */
            .pipe(map(
                (recipes)=>{
                   return recipes.map(recipe=>{
                    //  юзаємо спред оператор тут ми докидуємо властивість ingredients
                    return {...recipe, ingredients:recipe.ingredients? recipe.ingredients: []}
                   })
                }
           ) ,tap(
            (recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes)
                
            }
        ))
            
         
    }


    postRecipe(recipe:Recipe){
       return this.http.post<Recipe>('https://project-udemy-1fd00-default-rtdb.firebaseio.com/',
        recipe
        )
    }
}