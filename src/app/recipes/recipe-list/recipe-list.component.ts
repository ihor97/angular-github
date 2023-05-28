import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() switchItem=new EventEmitter<Recipe>()
recipes:Recipe[]=[
  new Recipe('A test Recipe1','this is simply the test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')
,
  new Recipe('A test Recipe2','this is simply the test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')

]

  constructor() { }

  ngOnInit(): void {
  }
  getSelectedItem(item:Recipe){
    this.switchItem.emit(item)
    
  }
}
