import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartSelector } from 'src/app/store/product.selectors';
import { AppStateInterface, IProduct } from 'src/shared/interfaces';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cart$: Observable<IProduct[]>;

  constructor(private store: Store<AppStateInterface>) { 
    this.cart$ = this.store.pipe(select(cartSelector));
  }

}
