import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
  databaseUrl = 'https://course-app-a4262.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  saveRecipes() {
    return this.http.put(
      this.databaseUrl + 'recipes.json',
      this.recipeService.getRecipes()
    );
  }

  fetchRecipes() {
    this.http
      .get(this.databaseUrl + 'recipes.json')
      .subscribe((response: Recipe[]) => {
        response.map((recipe: Recipe) => {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        });
        console.log(response);
        this.recipeService.setRecipes(response);
      });
  }
}
