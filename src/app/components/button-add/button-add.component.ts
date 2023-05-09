import { Component, Input, OnInit } from '@angular/core';
import { AppStateInterface, IProduct } from 'src/shared/interfaces';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import * as CartActions from '../../store/product.actions';
import { Observable } from 'rxjs';
import { cartSelector } from 'src/app/store/product.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
  providers: [MessageService]
})
export class ButtonAddComponent implements OnInit{
  @Input() product: IProduct;
  cart$: Observable<IProduct[]>;
  path: String = '';

  constructor(
    private store: Store<AppStateInterface>,
    private messageService: MessageService,
    private route: ActivatedRoute) 
  { 
    this.cart$ = this.store.pipe(select(cartSelector));
  }

  ngOnInit() {
    this.route.url.subscribe(([url]) => {
      this.path = url.path;
    });
  }

  addToCart(product) {
    this.store.dispatch(CartActions.postCart({products: product}))
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item added to cart' });
  }

  removeFromCart(product) {
    this.store.dispatch(CartActions.removeItemFromCart({product: product}))
    this.messageService.add({ severity: 'warn', summary: 'Removed', detail: 'Item removed from cart' });
  }
}
