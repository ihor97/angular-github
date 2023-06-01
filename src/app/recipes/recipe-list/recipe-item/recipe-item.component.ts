import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // тут можна не вказувати дженерік з типом Recipe 
  @Input() index:number
 @Input() recipe:Recipe
  constructor() { }

  ngOnInit(): void {
    
  }


}
