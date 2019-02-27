import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('potata soup', 'Delicious taters', 'https://www.maxpixel.net/static/photo/1x/Nutrition-Potato-Soup-Onion-Cheddar-Cheese-Bacon-655123.jpg'),
    new Recipe('potata soup', 'Delicious taters', 'https://www.maxpixel.net/static/photo/1x/Nutrition-Potato-Soup-Onion-Cheddar-Cheese-Bacon-655123.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
