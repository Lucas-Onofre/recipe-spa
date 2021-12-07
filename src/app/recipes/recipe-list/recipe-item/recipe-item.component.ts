import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(){
    this.selectedRecipe.emit(
      {
        name: this.recipe.name,
        description: this.recipe.description,
        imagePath: this.recipe.imagePath
      }
    )
  }
}
