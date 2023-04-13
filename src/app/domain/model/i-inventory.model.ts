import { ProductModel } from "./i-product.model";
import { WareHouseModel } from "./i-warehouse.model";

export interface InventoryModel {

    _id?: string;
    product : ProductModel;
    warehouse: WareHouseModel;
    level: string;
    quantity: number;

    
  }