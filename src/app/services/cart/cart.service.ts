import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IProduct } from 'src/shared/interfaces';

export function AddToCart(product: IProduct) {

}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart() {
    let resp: IProduct[];
    return of(resp);
  }

}
