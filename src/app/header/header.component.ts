import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeShown = new EventEmitter<{}>();
  @Output() shoppingListShown = new EventEmitter<{}>();
  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
    this.recipeShown.emit({});
  }

  showShoppingList() {
    this.shoppingListShown.emit({});
  }

}
