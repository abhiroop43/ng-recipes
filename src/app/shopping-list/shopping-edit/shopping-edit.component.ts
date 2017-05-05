import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  add(nameInput, amountInput) {
    this.shoppingListService
      .addIngredient(new Ingredient(String(nameInput.value),
      Number(amountInput.value)));

    nameInput.value = '';
    amountInput.value = '';
  }

  clear(nameInput, amountInput) {
    nameInput.value = '';
    amountInput.value = '';
  }

}
