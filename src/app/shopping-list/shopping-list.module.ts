import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
  declarations: [ShoppingEditComponent,
  ShoppingListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ShoppingListRoutingModule
    ]
})
export class ShoppingListModule { }
