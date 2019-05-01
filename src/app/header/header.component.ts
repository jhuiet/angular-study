import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { HttpService } from '../services/http.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private httpService: HttpService,
    private recipeService: RecipeService) {}

  saveData() {
    this.httpService.saveRecipes()
      .subscribe();
  }

  fetchData() {
    this.httpService.fetchRecipes();
  }
}
