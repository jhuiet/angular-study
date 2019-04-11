import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
  ingredientsChange = new Subject<Ingredient[]>();
  startedEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("lettuce", 3)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
  //   for(let i of ingredients){
  //     this.ingredients.push(i);
  //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChange.next(this.ingredients.slice());
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    var index = this.ingredients.findIndex(x => x.amount === ingredient.amount && x.name === ingredient.name);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
