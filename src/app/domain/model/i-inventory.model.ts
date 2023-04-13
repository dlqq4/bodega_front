import { ProductModel } from "./i-product.model";
import { WareHouseModel } from "./i-warehouse.model";

export interface InventoryModel {

    product : ProductModel;
    warehouse: WareHouseModel;
    level: string;
    quantity: number;

    
  }