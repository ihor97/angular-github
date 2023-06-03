import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
recipes:Recipe[]
subscription:Subscription
  constructor(private recipesService:RecipesService,private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {  
    this.recipes=this.recipesService.getRecipes()

   this.subscription= this.recipesService.recipeChanged.subscribe(

      (recipes:Recipe[])=>{
        this.recipes=recipes
      }
    )
    console.log(this.recipes);
    
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.actRoute})
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
