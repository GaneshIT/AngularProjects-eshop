import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//HTTPClient connect API
//it will have GET,POST,PUT,DELETE Rest API Methods
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
const baseUrl='http://localhost:5097/api/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:any):Observable<any>{
    return  this.http.post(baseUrl,data);
  }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl);
  }

}



// GetData():int{

// }

// UpdateData():void{

// }