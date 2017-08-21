import { Ingredient } from './../shared/model/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';




@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredient: Ingredient [];
  private changeInSliceSubscription: Subscription;
  // theIngredients: Ingredient [] = [

  //   new Ingredient ('Apples', 5),
  //   new Ingredient ('Tomatos', 10),



  // ] ;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  //  what is already in the list
   this.ingredient = this.shoppingListService.getTheIngredients();
   // what is new after add
   this.changeInSliceSubscription = this.shoppingListService.showChangeInSlice.subscribe (
     (ingredient: Ingredient[]) => {
       this.ingredient = ingredient; }
      );
                                // this subscriptio is no longer angualr, its from rxjs, you need to unsubscribe
  }

onEditItem(index: number) {
this.shoppingListService.startedEditing.next(index);
}


  onListAdded (ingredient: Ingredient) {

    this.shoppingListService.onAddItems(ingredient);
  }

  ngOnDestroy() {
    this.changeInSliceSubscription.unsubscribe();
  }



}
