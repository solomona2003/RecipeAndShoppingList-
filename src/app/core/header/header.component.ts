import { RecipeService } from './../../recipes/service/recipe.service';
import { AuthService } from '../../auth/auth.service';
// import { HttpEvent, HttpEventType} from '@angular/common/http';
import { DataStorageService } from '../../shared/service/data-storage.service';
import { Component, DoCheck } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],


    animations: [
        trigger('fx',
            [state('normal', style({ 'background-color': 'transparent', transform: ' scale(0)' })),
            state('highlighted', style({ 'background-color': 'green', transform: 'scale(1)' })),
            transition('normal <=> highlighted', animate(1000)),
            ])
    ]
})


export class HeaderComponent implements DoCheck {

    state = 'normal';

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService,
        private authService: AuthService) { }


    onSave() {
        this.dataStorageService.storeData().subscribe(
            (response) => {
                console.log(response);

            }
        );
    }



    ngOnInit() {
       // this.status = this.authService.isAuthenticated();
    // if (!this.authService.isAuthenticated()) {
    //      console.log(this.authService.isAuthenticated());
    //         this.state = 'normal';
    // }



    }

    ngDoCheck() {

        if (this.authService.isAuthenticated()) {
            this.state = 'highlighted';
        }

    }



    onGet() {
        this.dataStorageService.fetchData();
    }

    statusChecker() {

        return this.authService.isAuthenticated();
    }

    statusCheckerForLogout() {
         this.authService.logOut();
         this.state = 'normal';

    }


}
