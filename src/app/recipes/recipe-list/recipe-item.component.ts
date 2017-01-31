import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ClickedDirective } from '../../shopping-list/clicked.directive'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
