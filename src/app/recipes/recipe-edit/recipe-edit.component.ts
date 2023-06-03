import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  recipeForm: FormGroup
  id: number
  editMode = false
  constructor(private actRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (params: Params) => {
          this.id = +params['id']
          this.editMode = params['id']!=null
          this.initForm()
      }
    )


  }
  onSubmit() {
    console.log(this.recipeForm);

  }
  private initForm() {
    let recipeName = ''
    let recipeImagePath = ''
    let recipeDescription = ''
 
    let recipeIngredients=new FormArray([])
    if (this.editMode) {
      const recipe = this.recipeService.getOneRecipe(this.id)
      if(recipe['ingredients']){
        for (const ingr of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name':new FormControl(ingr.name),
            'amount':new FormControl(ingr.amount)
          }))
        }
      }
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      this.recipeForm = new FormGroup({
        name: new FormControl(recipeName),
        imagePath: new FormControl(recipeImagePath),
        description: new FormControl(recipeDescription),
        ingredients:recipeIngredients

      })

    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
      ingredients:recipeIngredients
    })

  }
}
