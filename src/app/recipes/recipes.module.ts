import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from '../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class RecipesModule {}
