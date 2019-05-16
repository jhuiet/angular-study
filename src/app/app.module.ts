import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './services/shopping.service';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FlexboxComponent } from './funLearning/flexbox/flexbox.component';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SelectRecipeComponent,
    FlexboxComponent,
    ResponsivePageComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RecipesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ShoppingService, RecipeService, HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
