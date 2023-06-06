import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs/operators"
import { RecipesService } from "../recipes/recipes.service";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        // якщо ми користуємось put то всі дані що були в сховищі перепишуться
        // якщо ми робимо put то ми отримуємо індекси
        this.http.put('https://project-udemy-1fd00-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
            response => {
                console.log(response);

            }
        )
    }

    fetchRecipes() {
        // це означає take((1) що я хочу взяти тільки один раз дані з Observable і після того ми зразу відписуємся і нам не треба відписуватися після вручну
        /*   this.authService.user.pipe(take((1)).subscribe(user=>{ 
            так як тут вертається Observable але ми хочемо вернути цей Observable return this.http 
            при тому що return в subscribe не працює
   })

   для того щоб вирішити цю проблему треба склеїти цих два Observable
   exhaustMap - сюди ми поміщаємо return this.http цей  Observable і цей оператор чекає поки попередній Observable розрішиться 
   потім він заміняється на Observable return this.http 

   так як ми вже в операторі pipe ми просто вставляємо map i tap
    */

    
            return this.http
                .get<Recipe[]>('https://project-udemy-1fd00-default-rtdb.firebaseio.com/recipes.json',)
                
                .pipe(
                 map(
            (recipes) => {
                return recipes.map(recipe => {
                    //  юзаємо спред оператор тут ми докидуємо властивість ingredients
                    /*
                  так як аппка може ламатися через те що масиву інгридієтнів може не бути 
                  і той масив буде мати undefined
                  ми трансформуємо наші дані з сервера таким чином що коли немає інгридієнтів 
                  ми ставимо туди пустий масив 
                  коли ми працюємо над масивом обєктів за допомоги map  ми маємо повертати обєкт!
                  */
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }
        ), tap(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes)
            }
        )    
                )

       


    }


    postRecipe(recipe: Recipe) {
        return this.http.post<Recipe>('https://project-udemy-1fd00-default-rtdb.firebaseio.com/',
            recipe
        )
    }
}