import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    selector: 'app-header'
})
export class HeaderComponent implements OnInit,OnDestroy {
    isAuthenticated=false
    private userSub:Subscription
    collapsed = true;
    constructor(private dataStorageService:DataStorageService,private authService:AuthService){

    }
    ngOnInit(): void {
       this.userSub= this.authService.user.subscribe(
        user=>{
            // !!user ? false : true  щоб не писати таке можна просто написати !
            this.isAuthenticated=!!user 
        }
        )
    }
    saveRecipes(){
        this.dataStorageService.storeRecipes()
    }
    fetchRecipes(){
        // не обовязково ф-ю передавати в subscribe
        this.dataStorageService.fetchRecipes().subscribe()
        
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
}