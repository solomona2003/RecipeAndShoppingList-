import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from './../service/shopping-list.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') theForm: NgForm;
  editMode = false;
  editedItem: number;
  editedIngredient: Ingredient;

killSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

   this.killSubscription = this.shoppingListService.startedEditing.subscribe(
    (index: number) => {
        this.editedItem = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.theForm.setValue({name: this.editedIngredient.name, amount: this.editedIngredient.amount});
    }
    );

  }


  onUpdateOrAdd(form: NgForm) {
const value = form.value;
const theNewIngredient = new Ingredient (value.name, value.amount);
if (this.editMode) {
  this.shoppingListService.updateIngredient (this.editedItem, theNewIngredient);
  this.editMode = false;
  form.reset();
} else {

this.shoppingListService.onAddItems(theNewIngredient);
this.editMode = false;
form.reset();
}
 }

  // onAdd() {
  //   const name: string = this.nameInputRef.nativeElement.value;
  //   const amount: number = this.AmountInputRef.nativeElement.value;
  //   const theNewIngredient =  new Ingredient (name, amount);
  //   this.newIngridient.emit(theNewIngredient);
  // }

onDelete() {

  this.shoppingListService.deleteItem(this.editedItem);
  this.onClear();
  
}


onClear() {
  this.theForm.reset();
  this.editMode = false;
}


ngOnDestroy () {
  this.killSubscription.unsubscribe();

}
 
}
