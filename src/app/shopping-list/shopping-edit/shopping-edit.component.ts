import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  add(nameInput, amountInput) {
    this.ingredientAdded.emit(
      new Ingredient(String(nameInput.value),
        Number(amountInput.value)));

    nameInput.value = '';
    amountInput.value = '';
  }

  clear(nameInput, amountInput) {
    nameInput.value = '';
    amountInput.value = '';
  }

}
