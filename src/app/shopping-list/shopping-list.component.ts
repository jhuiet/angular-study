import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../services/shopping.service";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.sass"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] ;
  shoppingSub: Subscription;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    // this.shoppingService.onIngredientAdd.subscribe((ing: Ingredient) => this.ingredients = ing);
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingSub = this.shoppingService.ingredientsChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }

  ngOnDestroy() {
    this.shoppingSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.startedEdit.next(index);
  }
}
