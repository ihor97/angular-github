import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipesService {
  // краще зробити private
  getSelectedRecipe = new EventEmitter<Recipe>()
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

  }
}