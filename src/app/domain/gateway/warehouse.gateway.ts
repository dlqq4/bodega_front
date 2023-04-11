import { Observable } from "rxjs";
import { WareHouseModel } from "../model/i-warehouse.model";



export abstract class WareHouseGateway {

    abstract getById(id: string) : Observable<WareHouseModel>;

    abstract getAll() : Observable<WareHouseModel[]>;

    abstract create(product : WareHouseModel) : Observable<WareHouseModel>;

    abstract delete(id: string) : Observable<boolean>;

    abstract update(id: string, product : WareHouseModel) : Observable<WareHouseModel>;

}