import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { SelectRecipeComponent } from '../select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: SelectRecipeComponent, pathMatch: 'full' },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeRoutingModule{}
