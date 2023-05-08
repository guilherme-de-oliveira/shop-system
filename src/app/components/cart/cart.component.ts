import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/shared/interfaces';
import { AppStateInterface } from 'src/shared/interfaces';
import { cartSelector } from 'src/app/store/product.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart$: Observable<IProduct[]>;

  constructor(private store: Store<AppStateInterface>) { 
    this.cart$ = this.store.pipe(select(cartSelector));
    
  }

  ngOnInit(): void {

  }
}
