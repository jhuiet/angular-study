import { Recipe } from '../recipes/recipe.model';
import { RecipesComponent } from '../recipes/recipes.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'potata soup',
      'Delicious taters',
      'https://www.maxpixel.net/static/photo/1x/Nutrition-Potato-Soup-Onion-Cheddar-Cheese-Bacon-655123.jpg',
      [
        new Ingredient( 'meat', 1),
        new Ingredient('potata', 122)
      ]),
    new Recipe(
      'potata soup',
      'Delicious taters',
      'https://www.maxpixel.net/static/photo/1x/Nutrition-Potato-Soup-Onion-Cheddar-Cheese-Bacon-655123.jpg',
      [
        new Ingredient( 'meat', 50),
        new Ingredient('potata', 1)
      ]),
  ];

  constructor(private slService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    // if (recipe['ingredients']){
    //   this.slService.addIngredients(recipe.ingredients);
    // }
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    // mess with ingredients?
  }

  deleteRecipe(index: number) {
    // var index = this.recipes.findIndex(x => x.name === Recipe.name && x.description === Recipe.description....... );
    if (index > -1) {
      this.recipes.splice(index, 1);
    }
    this.recipesChanged.next(this.recipes.slice());
  }
}
