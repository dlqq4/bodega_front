import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<InventoryModel> (this.apiServeUrl+"/Inventory/find-by-id/"+id)
  }
  
  public update(id: string, Inventory: InventoryModel): Observable<InventoryModel> {
      return this.http.put<InventoryModel>(this.apiServeUrl+"/inventory/update-inventory/"+id, Inventory)
  }

  public create(Inventory : InventoryModel ): Observable<InventoryModel> {
    return this.http.post<InventoryModel>(this.apiServeUrl +"/inventory/create-inventory", Inventory);
  }

  public delete(id : string): Observable<boolean> {
    return this.http.delete<boolean> (this.apiServeUrl+"/inventory/delete-inventory/"+id)
  }

}
