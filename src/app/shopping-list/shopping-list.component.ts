import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../services/shopping.service";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.sass"],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("lettuce", 3)
  ];

  constructor() {}

  ngOnInit() {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }
}
