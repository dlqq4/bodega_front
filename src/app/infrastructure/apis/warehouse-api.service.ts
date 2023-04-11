import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WareHouseModel } from 'src/app/domain/model/i-warehouse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WareHouseApiService {

  private apiServeUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) {
  }

  //******************************************************************************************/

  public getAll(): Observable<WareHouseModel[]> {
    return this.http.get<WareHouseModel[]> (this.apiServeUrl+"/warehouse/find-all-wareHouse");
  }

  public getById(id : string): Observable<WareHouseModel> {
    return this.http.get<WareHouseModel> (this.apiServeUrl+"/warehouse/find-by-id/"+id)
  }
  
  public update(id: string, WareHouse: WareHouseModel): Observable<WareHouseModel> {
      return this.http.put<WareHouseModel>(this.apiServeUrl+"/warehouse/update-wareHouse/"+id, WareHouse)
  }

  public create(WareHouse : WareHouseModel ): Observable<WareHouseModel> {
    return this.http.post<WareHouseModel>(this.apiServeUrl +"/warehouse/create-wareHouse", WareHouse);
  }

  public delete(id : string): Observable<boolean> {
    return this.http.delete<boolean> (this.apiServeUrl+"/warehouse/delete-wareHouse/"+id)
  }

}
