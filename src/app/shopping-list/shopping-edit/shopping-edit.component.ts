import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { extendsDirectlyFromObject } from '@angular/core/src/render3/jit/directive';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {


  /*
    This component demonstrates the template driven approach of form handling.
    It uses the shopping.service.ts service to modify the list of ingredients.








  */
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingService.getIngredient(this.editItemIndex);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const value = this.slForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
      this.editMode = false;
      this.slForm.reset();
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
  }


  onDelete() {
    this.shoppingService.deleteIngredient(this.editItem);
    this.editMode = false;
    this.slForm.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
