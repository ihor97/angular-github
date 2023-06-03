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
  editMode = false
  @ViewChild('f') f: NgForm

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true
        this.editItemIndex = index

      }

    )

  }
  onAddIngredient(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, +form.value.amount)
    this.shoppingListService.addIngredient(ingredient)
    console.log(this.f);
    form.reset()

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }
}
