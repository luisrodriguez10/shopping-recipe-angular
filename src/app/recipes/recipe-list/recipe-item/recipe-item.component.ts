import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  //recipe is sent from recipe-list component and then used in the recipe-item html
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(){

  }

  ngOnInit(): void {

  }

  // recipeSelected sent to parent component recipe-list;
  // @Output() recipeSelected = new EventEmitter<void>();

  // onSelected(){
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
