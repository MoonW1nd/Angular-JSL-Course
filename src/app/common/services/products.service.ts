import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BASE_URL_TOKEN } from '../../config';
import { HttpService } from './http.service';


@Injectable()
export class ProductsService {
  public constructor(
    @Inject(BASE_URL_TOKEN) private _baseUrl: string,
    private _http: HttpClient
  ) {
    console.warn(this._baseUrl);
  }

  public getProducts(): Observable<Product[]> {
    return (this._http as HttpService)
      .customRequest(`/products`)
      .map((res: { data: Product[]} ) => res.data);
  }
}
