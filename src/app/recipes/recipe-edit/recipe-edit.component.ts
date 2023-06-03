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
  recipeForm: FormGroup
  id: number
  editMode = false
  constructor(private actRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.id = +params['id']
          this.editMode = true
        } else {
          console.log(+params['id']);
          // викликаємо метод initForm тут тому що наша урла буде мінятися
          this.initForm()
          this.editMode = false

        }
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
    if (this.editMode) {
      const recipe = this.recipeService.getOneRecipe(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      this.recipeForm = new FormGroup({
        name: new FormControl(recipeName),
        imagePath: new FormControl(recipeImagePath),
        description: new FormControl(recipeDescription),

      })
    }

  }
}
