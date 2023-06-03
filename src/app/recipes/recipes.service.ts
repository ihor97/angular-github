import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable({providedIn:'root'})
export class RecipesService {
  recipeChanged=new Subject<Recipe[]>()
  // краще зробити private
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'a super tasty Schnitzel -just awesome', 'https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg',
      [new Ingredient('Meat', 1), new Ingredient('french fries', 20)]
    )
    ,
    new Recipe('Big fat burger', 'what else you need to say?', 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])

  ]

  constructor(private shoppingService: ShoppingListService) { }
  getRecipes() {
    // повертаємо копію 

    return this.recipes.slice()
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients)
    this.recipeChanged.next(this.recipes.slice())

  }
  getOneRecipe(id:number){
    // краще і тут робити копію
    return this.recipes.slice()[id]
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())

  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe
    this.recipeChanged.next(this.recipes.slice())

  }
  removeRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipeChanged.next(this.recipes.slice())
  }
}