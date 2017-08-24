import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
loadedFeature  = 'recipe';

onNavigate (feature: string) {

  this.loadedFeature = feature;
}

ngOnInit () {
  firebase.initializeApp({
    apiKey: "AIzaSyCajxffDQs1vua17mvuBxZzaY3euxqmdIY",
    authDomain: "ng-recipe-book-56769.firebaseapp.com"
  });





}




}
