import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {StaticDataSource} from "./static.datasource";

@Injectable ()
export class ProductRepository {
    private products?: Product[];
    private categories?: string [];
    
    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data=> {
            if(data){
                this.products=data;

            data.map(p => p.category)
            .filter((c,index,array) => array.indexOf(c) == 
            index).sort().forEach(category=>{
                if(category){
                    this.categories?.push(category);
                }

               
            }); 
            }
            
            
        });
    }
    getProducts(category?: string): Product[] {
        if(this.products)
    
            return this.products?.filter(p=>  category==p.category);
        else 
        return [];
        
    }
    getProduct(id:number): Product|undefined {
            return this.products?.find(p => p.id == id);
        
    }
    getCategories(): string[] |undefined {
        return this.categories;
    }
}