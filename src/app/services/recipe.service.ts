import { Recipe } from '../recipes/recipe.model';
import { RecipesComponent } from '../recipes/recipes.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
    return this.recipes.slice(); //slice returns a copy instead of a reference
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
