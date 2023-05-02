import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/models/cart.interface';
import { selectBookCollection } from './cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart$: Observable<CartModel[]>;
  
  // count$: Observable<number>;

  constructor(private store: Store<{cart: CartModel}>) { 
    // this.cart$ = store.pipe(select('cart'));
    this.cart$ = this.store.select(selectBookCollection)
    console.log(this.cart$)
  }
}
