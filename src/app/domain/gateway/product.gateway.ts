import { Observable } from "rxjs";
import { ProductModel } from "../model/i-product.model";


export abstract class ProductGateway {

    abstract getById(id: string) : Observable<ProductModel>;

    abstract getAll() : Observable<ProductModel[]>;

    abstract create(product : ProductModel) : Observable<ProductModel>;

    abstract delete(id: string) : Observable<boolean>;

    abstract update(id: string, product : ProductModel) : Observable<ProductModel>;

}