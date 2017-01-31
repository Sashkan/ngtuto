import { Component, OnInit } from '@angular/core';

import { ShoppingListAddComponent } from "./shopping-list-add.component"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private switch = true;
  private items = [1,2,3,4,5];
  onSwitch() {
    this.switch = !this.switch;
  }

  constructor() { }

  ngOnInit() {
  }

}
