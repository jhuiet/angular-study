import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onItemAdd = new EventEmitter<Ingredient>();
  @Output() onItemDelete = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.onItemAdd.emit({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value});
  }


}
