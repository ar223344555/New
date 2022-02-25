import {Component} from "@angular/core";
import{Product} from "../Model/product.model";
import { ProductRepository } from "../Model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    constructor(private repository: ProductRepository) {}
        get products(): Product[]  |undefined { 
            return this.repository.getProducts();
        }
        get categories(): string[]| undefined {
            return this.repository.getCategories();
        } 
    
}