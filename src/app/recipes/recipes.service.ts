import { Recipe } from "./recipe.model";

export class RecipesService {
    // краще зробити private
   private recipes:Recipe[]=[
        new Recipe('A test Recipe1','this is simply the test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')
      ,
        new Recipe('A test Recipe2','this is simply the test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')
      
      ]
      getRecipes(){
        // повертаємо копію 
        return this.recipes.slice()
      }
}