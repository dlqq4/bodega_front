import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/domain/model/i-product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private apiServeUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*'
    })
  }

  //******************************************************************************************/

  public getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]> (this.apiServeUrl+"/product/find-all-product");
  }

  public getById(id : string): Observable<ProductModel> {
    return this.http.get<ProductModel> (this.apiServeUrl+"/product/find-by-id/"+id)
  }
  
  public update(id: string, product: ProductModel): Observable<ProductModel> {
      return this.http.put<ProductModel>(this.apiServeUrl+"/product/update-product/"+id, product)
  }

  public create(product : ProductModel ): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.apiServeUrl +"/product/create-product", product);
  }

  public delete(id : string): Observable<boolean> {
    return this.http.delete<boolean> (this.apiServeUrl+"/product/delete-product/"+id)
  }


}
