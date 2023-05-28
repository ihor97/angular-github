import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef
  @ViewChild('amountInput') amountInput:ElementRef

  @Output() onAddedIngredient=new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient(){
    const ingredient=new Ingredient(this.nameInput.nativeElement.value,+this.amountInput.nativeElement.value)
      this.nameInput.nativeElement.value=''
      this.amountInput.nativeElement.value=null
      this.onAddedIngredient.emit(ingredient)
  }
}
