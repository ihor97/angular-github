import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    addNewIngredient = new EventEmitter<void>()
    
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('Tomatos', 10)
    ]

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
    }
    getIngredients() {
        return this.ingredients.slice()
    }
}