import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeVisibile = true;
  shoppingListVisible = false;

  onRecipeShown(): void{
    this.recipeVisibile = true;
    this.shoppingListVisible = false;
  }

  onShoppingListShown(): void{
    this.recipeVisibile = false;
    this.shoppingListVisible = true;
  }
}
