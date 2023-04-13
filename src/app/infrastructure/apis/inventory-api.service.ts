import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from 'src/app/domain/commands/inventory.dto';
import { InventoryModel } from 'src/app/domain/model/i-inventory.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  private apiServeUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) {
  }

  //******************************************************************************************/

  public getAll(): Observable<InventoryModel[]> {
    return this.http.get<InventoryModel[]> (this.apiServeUrl+"/inventory/find-all-inventory");
  }

  public getById(id : string): Observable<InventoryModel> {
    return this.http.get<InventoryModel> (this.apiServeUrl+"/inventory/find-by-id/"+id)
  }
  
  public update(id: string, Inventory: InventoryModel): Observable<InventoryModel> {
      return this.http.put<InventoryModel>(this.apiServeUrl+"/inventory/update-inventory/"+id, Inventory)
  }

  public create(Inventory : InventoryDTO ): Observable<InventoryModel> {
    return this.http.post<InventoryModel>(this.apiServeUrl +"/inventory/create-inventory", Inventory);
  }

  public delete(_id : string): Observable<boolean> {
    return this.http.post<boolean> (this.apiServeUrl+"/inventory/delete-inventory/",{_id})
  }

}
