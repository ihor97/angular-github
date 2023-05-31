import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id:number
  constructor(private actRoute: ActivatedRoute, private recipeService: RecipesService) { }
  ngOnInit(): void {
    // це можна не робити
    // const id = +this.actRoute.snapshot.params['id']
    // this.recipe = this.recipeService.getOneRecipe(id)
    this.actRoute.params.subscribe(
      (params: Params) => {
        this.id=+params['id']
        this.recipe = this.recipeService.getOneRecipe(this.id)
      }
    )
  }
  toShoppinglist() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
