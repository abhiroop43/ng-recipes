import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // @Output() selectedIngredient = new EventEmitter<Ingredient>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(newIng: Ingredient){
    this.ingredients.push(newIng);
  }

  // selectItem(selectedIng: Ingredient){
  //   this.selectedIngredient.emit(selectedIng);
  // }

}
