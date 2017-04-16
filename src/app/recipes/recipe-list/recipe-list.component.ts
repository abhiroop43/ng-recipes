import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is simply a test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Test Recipe 2', 'Yet another test recipe', 'https://s-media-cache-ak0.pinimg.com/originals/a9/8b/be/a98bbe847a0658a97fc80a85d7989f50.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(selectedRecipe: Recipe): void {
    // console.log(selectedRecipe);
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
