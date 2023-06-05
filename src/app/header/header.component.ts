import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";

@Component({
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    selector: 'app-header'
})
export class HeaderComponent {
    collapsed = true;
    constructor(private dataStorageService:DataStorageService){

    }
    saveRecipes(){
        this.dataStorageService.storeRecipes()
    }
    fetchRecipes(){
        // не обовязково ф-ю передавати в subscribe
        this.dataStorageService.fetchRecipes().subscribe()
        
    }
}