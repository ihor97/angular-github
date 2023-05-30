import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipesService) { }
  ngOnInit(): void {
  }
  toShoppinglist() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
