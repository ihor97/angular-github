import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    addNewIngredient = new Subject<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('Tomatos', 10)
    ]

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.addNewIngredient.next(this.ingredients.slice())

    }
    getIngredients() {
        return this.ingredients.slice()

    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.addNewIngredient.next(this.ingredients.slice())
    }
}