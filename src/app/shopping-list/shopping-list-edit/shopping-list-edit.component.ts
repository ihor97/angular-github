import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  editItemIndex: number
  ingredient: Ingredient
  editMode = false
  @ViewChild('f') f: NgForm

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true
        this.editItemIndex = index
        this.ingredient = this.shoppingListService.getOneIngredient(index)
        this.f.setValue({
          'name': this.ingredient.name,
          'amount': +this.ingredient.amount
        })
      }

    )

  }
  onSubmit(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, +form.value.amount)
    if (!this.editMode) {
      this.shoppingListService.addIngredient(ingredient)
    } else {
      this.shoppingListService.updateIngredient(this.editItemIndex, ingredient)
    }

    form.reset()
    this.editMode = false

  }
  clearForm() {
    this.f.reset()
    this.editMode=false
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
