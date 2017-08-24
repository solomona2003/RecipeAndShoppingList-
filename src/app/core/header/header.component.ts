import { RecipeService } from './../../recipes/service/recipe.service';
import { AuthService } from '../../auth/auth.service';
// import { HttpEvent, HttpEventType} from '@angular/common/http';
import { DataStorageService } from '../../shared/service/data-storage.service';
import { Component} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent {

    status: boolean;
    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService,
        private authService: AuthService) { }


    onSave() {
        this.dataStorageService.storeData().subscribe(
            (response) => {
                console.log(response);

            }
        );
    }


    onGet() {
        this.dataStorageService.fetchData();
    }

    statusChecker() {

        return this.authService.isAuthenticated();
    }


}
