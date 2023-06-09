import { Observable } from "rxjs";
import { InventoryModel } from "../model/i-inventory.model";
import { InventoryDTO } from "../commands/inventory.dto";
import { QuantityInventoryDTO } from "../commands/quantity-inventory.dto";


export abstract class InventoryGateway {

    abstract getById(id: string) : Observable<InventoryModel>;

    abstract getAll() : Observable<InventoryModel[]>;

    abstract create(product : InventoryDTO) : Observable<InventoryModel>;

    abstract delete(id: string) : Observable<boolean>;

    abstract update(id: string, product : InventoryModel) : Observable<InventoryModel>;

    abstract updateQuantity(product : QuantityInventoryDTO) : Observable<InventoryModel>;

}