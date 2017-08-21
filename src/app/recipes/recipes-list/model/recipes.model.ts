import { Ingredient } from './../../../shared/model/ingredient.model';
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredient[]; // makes all the difference to the earlier confusion

    constructor (name: string, desc: string , imagePath: string, ingredient: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;

    }
}
