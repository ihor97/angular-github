import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[]
  ingSubscription:Subscription
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
  this.ingSubscription=  this.shoppingListService.addNewIngredient.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients
      }
    )

  }
  ngOnDestroy(): void {
    this.ingSubscription.unsubscribe()
  }
  onEditItem(id:number){

    this.shoppingListService.startedEditing.next(id)
    
  }


}
