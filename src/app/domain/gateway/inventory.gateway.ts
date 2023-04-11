import { Observable } from "rxjs";
import { InventoryModel } from "../model/i-inventory.model";


export abstract class InventoryGateway {

    abstract getById(id: string) : Observable<InventoryModel>;

    abstract getAll() : Observable<InventoryModel[]>;

    abstract create(product : InventoryModel) : Observable<InventoryModel>;

    abstract delete(id: string) : Observable<boolean>;

    abstract update(id: string, product : InventoryModel) : Observable<InventoryModel>;

}