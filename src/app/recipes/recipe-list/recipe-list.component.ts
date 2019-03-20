import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeDetail = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('potata soup', 'Delicious taters', 'https://www.maxpixel.net/static/photo/1x/Nutrition-Potato-Soup-Onion-Cheddar-Cheese-Bacon-655123.jpg'),
    new Recipe('potata soup', 'Delicious taters', 'https://www.maxpixel.net/static/photo/1x/Nutrition-Potato-Soup-Onion-Cheddar-Cheese-Bacon-655123.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.onRecipeDetail.emit(recipe);
  }
}
