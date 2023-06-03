import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    addNewIngredient = new Subject<Ingredient[]>()
    startedEditing=new Subject<number>()

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
    editIgredient(id:number,name:string,amount:number){
        this.ingredients[id].name=name
        this.ingredients[id].amount=amount
    }
    getOneIngredient(id:number):Ingredient{
        return this.ingredients[id]
      }
      updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient
        this.addNewIngredient.next(this.ingredients.slice())
      }

}