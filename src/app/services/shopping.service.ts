import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("lettuce", 3)
  ];

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
  //   for(let i of ingredients){
  //     this.ingredients.push(i);
  //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
  getIngredients(){
    return this.ingredients.slice();
  }
}
