import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private recipeService: RecipesService,
    private router:Router
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
    // const newRecipe=new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // )

    // альтернатива тому що вище
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    // this.router.navigate(['recipes']) 
    // так краще додати цей метод сюди ніж писати знову навігацію
    this.exitEdit()

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
            'name':new FormControl(ingr.name,Validators.required),
            'amount':new FormControl(ingr.amount,[Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      this.recipeForm = new FormGroup({
        name: new FormControl(recipeName,Validators.required),
        imagePath: new FormControl(recipeImagePath,Validators.required),
        description: new FormControl(recipeDescription,Validators.required),
        ingredients:recipeIngredients

      })

    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName,Validators.required),
      imagePath: new FormControl(recipeImagePath,Validators.required),
      description: new FormControl(recipeDescription,Validators.required),
      ingredients:recipeIngredients
    })

  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name:new FormControl(null,Validators.required),
        amount:new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  exitEdit(){
    this.router.navigate(['../'],{relativeTo:this.actRoute})
  }
  removeIngredient(index:number){
//     (<FormArray>this.recipeForm.get('ingredients')).clear();
// The clear() method automatically loops through all registered FormControls 
// (or FormGroups) in the FormArray and removes them.
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
