import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
